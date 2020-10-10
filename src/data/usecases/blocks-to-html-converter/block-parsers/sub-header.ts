import { blockToInnerHtml } from '../../../helpers/block-to-inner-html';
import { Block } from 'data/protocols/blocks';
import { ToHtml } from 'domain/usecases/to-html';

export class SubHeaderBlockParser implements ToHtml {
  private _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    return Promise.resolve(`<h2>${await blockToInnerHtml(this._block)}</h2>`);
  }
}
