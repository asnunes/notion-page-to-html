import { Block } from '../../protocols/blocks';
import { PageProps } from '../../protocols/page-props';

export class PageBlockToPageProps {
  private readonly _pageBlock: Block;

  constructor(pageBlock: Block) {
    this._pageBlock = pageBlock;
  }

  toPageProps(): PageProps {
    const title = new PageBlockToTitle(this._pageBlock).toTitle();

    return {
      title,
    };
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
