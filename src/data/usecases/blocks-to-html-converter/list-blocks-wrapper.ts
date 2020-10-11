import { Block } from '../../protocols/blocks';

export class ListBlocksWrapper {
  wrapLists(blocks: Block[]): Block[] {
    return blocks.reduce((blocks, b) => {
      if (!this._isList(b)) return [...blocks, b];

      if (this._isFirstItemOfAList(blocks, b)) return [...blocks, this._generateListBlock(b)];

      const lastContent = blocks[blocks.length - 1];
      lastContent.children.push(b);
      return blocks;
    }, [] as Block[]);
  }

  private _isList(block: Block): boolean {
    return block && block.type.includes('list');
  }

  private _isFirstItemOfAList(blocks: Block[], currentBlock: Block): boolean {
    const lastContent = blocks[blocks.length - 1];

    return (
      (!this._isList(lastContent) || (lastContent && lastContent.children[0].type !== currentBlock.type)) &&
      this._isList(currentBlock)
    );
  }

  private _generateListBlock(childBlock: Block): Block {
    return {
      id: `${childBlock.id}-parent`,
      type: 'list',
      properties: {},
      children: [childBlock],
      decorableTexts: [],
    };
  }
}
