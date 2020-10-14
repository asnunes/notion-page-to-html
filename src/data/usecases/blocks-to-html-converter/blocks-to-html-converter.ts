import { ToHtml } from '../../../domain/usecases/to-html';
import { Block } from '../../protocols/blocks';
import { BlockDispatcher } from './block-dispatcher';
import { ListBlocksWrapper } from './list-blocks-wrapper';

export class BlocksToHTML implements ToHtml {
  private _blocks: Block[];
  private _dispatcher: BlockDispatcher;
  private _listBlocksWrapper: ListBlocksWrapper;

  constructor(blocks: Block[], dispatcher: BlockDispatcher, listBlocksWrapper: ListBlocksWrapper) {
    this._dispatcher = dispatcher;
    this._listBlocksWrapper = listBlocksWrapper;
    this._blocks = this._wrapLists(blocks);
  }

  async convert(): Promise<string> {
    const htmlPromises: Promise<string[]> = Promise.all(this._blocks.map(this._convertBlock.bind(this)));
    const html = (await htmlPromises).join('\n');
    return new Promise((resolve) => resolve(html));
  }

  private async _convertBlock(block: Block): Promise<string> {
    const blockToHtmlConverter = this._dispatch(block);
    const htmlBlock = await blockToHtmlConverter.convert();
    return new Promise((resolve) => resolve(htmlBlock));
  }

  private _wrapLists(blocks: Block[]): Block[] {
    return this._listBlocksWrapper.wrapLists(blocks);
  }

  private _dispatch(block: Block): ToHtml {
    return this._dispatcher.dispatch(block);
  }
}
