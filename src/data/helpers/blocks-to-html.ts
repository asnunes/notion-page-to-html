import { Block } from '../protocols/blocks';
import { ListBlocksWrapper, BlockDispatcher, BlocksToHTML } from '../use-cases/blocks-to-html-converter';

export const blocksToHtml = async (blocks: Block[]): Promise<string> => {
  const dispatcher = new BlockDispatcher();
  const listWrapper = new ListBlocksWrapper();
  const blocksToHtmlConverter = new BlocksToHTML(blocks, dispatcher, listWrapper);
  const html = await blocksToHtmlConverter.convert();
  return Promise.resolve(html);
};

export const indentBlocksToHtml = async (blocks: Block[]): Promise<string> => {
  if (blocks.length === 0) return Promise.resolve('');

  const html = await blocksToHtml(blocks);
  return Promise.resolve(html);
};
