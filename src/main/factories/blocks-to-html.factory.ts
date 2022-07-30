import { Block } from '../../data/protocols/blocks';
import { BlocksToHTML, BlockDispatcher, ListBlocksWrapper } from '../../data/use-cases/blocks-to-html-converter';

export const makeBlocksToHtml = (blocks: Block[]): BlocksToHTML => {
  const dispatcher = new BlockDispatcher();
  const listBlocksWrapper = new ListBlocksWrapper();
  return new BlocksToHTML(blocks, dispatcher, listBlocksWrapper);
};
