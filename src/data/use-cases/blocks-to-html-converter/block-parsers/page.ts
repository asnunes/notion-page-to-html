import { Block } from '../../../protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';
import { blocksToHtml } from '../../../helpers/blocks-to-html';

export class PageBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    return blocksToHtml(this._block.children);
  }
}
