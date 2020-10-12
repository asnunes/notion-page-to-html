import { blockToInnerHtml } from '../../../helpers/block-to-inner-html';
import { Block } from '../../../protocols/blocks';
import { ToHtml } from '../../../../domain/usecases/to-html';

export class CalloutBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    return Promise.resolve(`
    <div class="callout">
      <div class="callout-emoji">${this._block.properties.page_icon}</div>
      <p>${await blockToInnerHtml(this._block)}</p>
    </div>
    `);
  }
}
