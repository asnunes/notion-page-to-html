import { blockToInnerHtml } from '../../../helpers/block-to-inner-html';
import { Block } from '../../../protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';
import { FormatToStyle } from '../../format-to-style';

export class SubSubHeaderBlockParser implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    const style = new FormatToStyle(this._block.format).toStyle();
    return Promise.resolve(`<h3${style}>${await blockToInnerHtml(this._block)}</h3>`);
  }
}
