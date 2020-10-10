import { Block } from '../../data/protocols/blocks';
import { BlocksToHTML } from '../../data/usecases/blocks-to-html-converter';
import { BlocksDispatcher } from '../../data/usecases/blocks-to-html-converter/blocks-dispatcher';
import { ListBlocksWrapper } from '../../data/usecases/blocks-to-html-converter/list-blocks-wrapper';

export const makeBlocksToHtml = (blocks: Block[]): BlocksToHTML => {
  const dispatcher = new BlocksDispatcher();
  const listBlocksWrapper = new ListBlocksWrapper();
  return new BlocksToHTML(blocks, dispatcher, listBlocksWrapper);
};
