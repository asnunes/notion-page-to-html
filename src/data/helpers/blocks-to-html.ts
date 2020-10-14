import { Block } from '../protocols/blocks';
import { ListBlocksWrapper, BlockDispatcher, BlocksToHTML } from '../usecases/blocks-to-html-converter';

export const blocksToHtml = async (blocks: Block[]): Promise<string> => {
  const dispatcher = new BlockDispatcher();
  const listWrapper = new ListBlocksWrapper();
  const blocksToHtmlConverter = new BlocksToHTML(blocks, dispatcher, listWrapper);
  const html = await blocksToHtmlConverter.convert();
  return Promise.resolve(html);
};
