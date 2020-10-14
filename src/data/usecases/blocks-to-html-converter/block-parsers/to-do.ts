import { blockToInnerHtml } from '../../../helpers/block-to-inner-html';
import { Block } from '../../../protocols/blocks';
import { ToHtml } from '../../../../domain/usecases/to-html';
import { FormatToStyle } from '../../../usecases/format-to-style';
import { indentBlocksToHtml } from '../../../helpers/blocks-to-html';

export class ToDoBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    const style = new FormatToStyle(this._block.format).toStyle();
    const childrenHtml = await indentBlocksToHtml(this._block.children);

    return Promise.resolve(
      `<div${style}>
        <input type="checkbox"${this._isChecked() ? ' checked' : ''} name="${this._block.id}">
        <label for="${this._block.id}">${await blockToInnerHtml(this._block)}</label>${childrenHtml}
      </div>`,
    );
  }

  private _isChecked(): boolean {
    return !!this._block.properties.checked;
  }
}
