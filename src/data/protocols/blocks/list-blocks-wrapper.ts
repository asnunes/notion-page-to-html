import { Block } from './block';

export interface ListBlocksWrapper {
  wrapLists(blocks: Block[]): Block[];
}
