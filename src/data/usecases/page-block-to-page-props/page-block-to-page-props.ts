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
    const coverImageSrc = await new PageBlockToCoverImageSource(this._pageBlock).toImageCover();

    return Promise.resolve({
      title,
      ...(coverImageSrc && { coverImageSrc }),
    });
  }
}

export class PageBlockToTitle {
  private readonly _pageBlock: Block;

  constructor(pageBlock: Block) {
    this._pageBlock = pageBlock;
  }

  toTitle(): string {
    return this._pageBlock.decorableTexts[0]?.text || '';
  }
}

export class PageBlockToCoverImageSource {
  private readonly _pageBlock: Block;

  constructor(pageBlock: Block) {
    this._pageBlock = pageBlock;
  }

  async toImageCover(): Promise<string | null> {
    const pageCover = this._pageBlock.format.page_cover;
    if (!pageCover || !this._isImageURL(pageCover)) return Promise.resolve(null);

    let head = '';
    if (pageCover.startsWith('/')) head = 'https://www.notion.so';

    return Base64Converter.convert(head + pageCover);
  }

  private _isImageURL(url: string): boolean {
    return /(?:([^:\/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpg|gif|png|jpeg))(?:\?([^#]*))?(?:#(.*))?/gi.test(url);
  }
}
