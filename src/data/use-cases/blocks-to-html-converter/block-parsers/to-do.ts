import { blockToInnerHtml } from '../../../helpers/block-to-inner-html';
import { Block } from '../../../protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';
import { FormatToStyle } from '../../format-to-style';
import { indentBlocksToHtml } from '../../../helpers/blocks-to-html';

export class ToDoBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    const style = new FormatToStyle(this._block.format).toStyle();
    const childrenHtml = await indentBlocksToHtml(this._block.children);

    return Promise.resolve(`\
<ul class="to-do-list"${style}>
<li>
<div class="checkbox checkbox-${this._isChecked() ? 'on' : 'off'}"></div>
<span class="to-do-children-${this._isChecked() ? 'checked' : 'unchecked'}">${await blockToInnerHtml(
      this._block,
    )}</span>${childrenHtml}
</li>
</ul>`);
  }

  private _isChecked(): boolean {
    return !!this._block.properties.checked;
  }
}
