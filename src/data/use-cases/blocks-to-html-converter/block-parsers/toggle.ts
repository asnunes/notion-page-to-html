import { blockToInnerHtml } from '../../../helpers/block-to-inner-html';
import { Block } from '../../../protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';
import { FormatToStyle } from '../../format-to-style';
import { indentBlocksToHtml } from '../../../helpers/blocks-to-html';

export class ToggleBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    const style = new FormatToStyle(this._block.format).toStyle();
    const childrenHtml = await indentBlocksToHtml(this._block.children);

    return Promise.resolve(`
<details open=""${style}>
<summary>${await blockToInnerHtml(this._block)}</summary>
${childrenHtml}
</details>`);
  }
}
