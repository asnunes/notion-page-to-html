import { Block } from '../../protocols/blocks';
import { PageProps } from '../../protocols/page-props';
import { Base64Converter } from '../../../utils/base-64-converter';

export class PageBlockToPageProps {
  private readonly _pageBlock: Block;

  constructor(pageBlock: Block) {
    this._pageBlock = pageBlock;
  }

  async toPageProps(): Promise<PageProps> {
    const title = new PageBlockToTitle(this._pageBlock).toTitle();
    const coverImage = await new PageBlockToCoverImageSource(this._pageBlock).toImageCover();
    const icon = await new PageBlockToIcon(this._pageBlock).toIcon();

    return Promise.resolve({
      title,
      ...(coverImage && { coverImageSrc: coverImage.base64, coverImagePosition: coverImage.position }),
      ...(icon && { icon }),
    });
  }
}

class PageBlockToTitle {
  private readonly _pageBlock: Block;

  constructor(pageBlock: Block) {
    this._pageBlock = pageBlock;
  }

  toTitle(): string {
    return this._pageBlock.decorableTexts[0]?.text || '';
  }
}

type ImageCover = {
  base64: string;
  position: number;
};

class PageBlockToCoverImageSource {
  private readonly _pageBlock: Block;

  constructor(pageBlock: Block) {
    this._pageBlock = pageBlock;
  }

  async toImageCover(): Promise<ImageCover | null> {
    const pageCover = this._pageBlock.format.page_cover;
    if (!pageCover || !this._isImageURL(pageCover)) return Promise.resolve(null);

    let head = '';
    if (pageCover.startsWith('/')) head = 'https://www.notion.so';

    const base64 = await Base64Converter.convert(head + pageCover);
    const position = this._pageCoverPositionToPositionCenter(this._pageBlock.format.page_cover_position || 0.6);

    return { base64, position };
  }

  private _isImageURL(url: string): boolean {
    return /(?:([^:\/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpg|gif|png|jpeg))(?:\?([^#]*))?(?:#(.*))?/gi.test(url);
  }

  private _pageCoverPositionToPositionCenter(coverPosition: number): number {
    return (1 - coverPosition) * 100;
  }
}

class PageBlockToIcon {
  private readonly _pageBlock: Block;

  constructor(pageBlock: Block) {
    this._pageBlock = pageBlock;
  }

  async toIcon(): Promise<string | null> {
    const icon = this._pageBlock.format.page_icon;
    if (!icon) return Promise.resolve(null);

    return icon;
  }
}
