import { Block } from '../../../protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';
import { blockToInnerText } from '../../../helpers/block-to-inner-text';

export class EquationBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    const { decorableTexts } = this._block;
    if (decorableTexts.length === 0) return Promise.resolve('');

    return Promise.resolve(decorableTexts ? `<div class="equation">$$${blockToInnerText(this._block)}$$</div>` : '');
  }
}
