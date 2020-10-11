import { Block } from '../../../../protocols/blocks';
import { ToHtml } from '../../../../../domain/usecases/to-html';
import { ListItemToHtml } from './list-item';

export class ListBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    const tag: string = fromTypeToTag[this._block.children[0].type] || fromTypeToTag.bulleted_list;

    return this._fromTemplate(tag, await this._itemsHtml());
  }

  private async _itemsHtml(): Promise<string> {
    const items = await Promise.all(this._block.children.map(async (c) => new ListItemToHtml(c).convert()));
    return Promise.resolve(items.join('\n  '));
  }

  private _fromTemplate(tag: string, innerHtml: string): string {
    return `<${tag}>\n  ${innerHtml}\n</${tag}>`;
  }
}

const fromTypeToTag: Record<string, string> = {
  bulleted_list: 'ul',
  numbered_list: 'ol',
};
