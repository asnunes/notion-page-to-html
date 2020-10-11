import { blockToInnerHtml } from '../../../../helpers/block-to-inner-html';
import { Block } from '../../../../protocols/blocks';
import { ToHtml } from '../../../../../domain/usecases/to-html';

export class ListItemToHtml implements ToHtml {
  private _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    return Promise.resolve(`<li>${await blockToInnerHtml(this._block)}</li>`);
  }
}
