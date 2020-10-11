import { Block } from 'data/protocols/blocks';
import { ToHtml } from 'domain/usecases/to-html';

export class DividerBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    return Promise.resolve(`<hr>`);
  }
}
