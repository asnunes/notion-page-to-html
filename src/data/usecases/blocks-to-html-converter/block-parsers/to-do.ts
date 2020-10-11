import { blockToInnerHtml } from '../../../helpers/block-to-inner-html';
import { Block } from 'data/protocols/blocks';
import { ToHtml } from 'domain/usecases/to-html';

export class ToDoBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    return Promise.resolve(
      `<div>
        <input type="checkbox"${this._isChecked() ? ' checked' : ''} name="${this._block.id}">
        <label for="${this._block.id}">${await blockToInnerHtml(this._block)}</label>
      </div>`,
    );
  }

  private _isChecked(): boolean {
    return !!this._block.properties.checked;
  }
}
