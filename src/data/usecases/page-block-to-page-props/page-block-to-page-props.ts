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
    const imageSourceTail = this._pageBlock.format.page_cover;
    if (!imageSourceTail) return Promise.resolve(null);

    return Base64Converter.convert('https://www.notion.so' + imageSourceTail);
  }
}
