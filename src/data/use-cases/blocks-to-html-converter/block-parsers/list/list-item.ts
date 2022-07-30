import { blockToInnerHtml } from '../../../../helpers/block-to-inner-html';
import { Block } from '../../../../protocols/blocks';
import { ToHtml } from '../../../../../domain/use-cases/to-html';
import { indentBlocksToHtml } from '../../../../helpers/blocks-to-html';

export class ListItemToHtml implements ToHtml {
  private _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    const childrenHtml = await indentBlocksToHtml(this._block.children);

    return Promise.resolve(`<li>${await blockToInnerHtml(this._block)}${childrenHtml}</li>`);
  }
}
