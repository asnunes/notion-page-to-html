import { Block } from '../../protocols/blocks';

export class PageBlockToTitle {
  private readonly _pageBlock: Block;

  constructor(pageBlock: Block) {
    this._pageBlock = pageBlock;
  }

  toTitle(): string {
    return this._pageBlock.decorableTexts[0]?.text || '';
  }
}
