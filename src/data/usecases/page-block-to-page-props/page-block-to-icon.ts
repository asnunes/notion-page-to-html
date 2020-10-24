import { Block } from '../../protocols/blocks';

export class PageBlockToIcon {
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
