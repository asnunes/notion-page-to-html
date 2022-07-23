import { Block } from '../../../../protocols/blocks';
import { ToHtml } from '../../../../../domain/use-cases/to-html';
import { ListItemToHtml } from './list-item';
import { FormatToStyle } from '../../../format-to-style';

export class ListBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    const tag: string = fromTypeToTag[this._block.children[0].type] || fromTypeToTag.bulleted_list;
    const style = new FormatToStyle(this._block.format).toStyle();

    const innerHtml = await this._itemsHtml();

    return Promise.resolve(`<${tag}${style}>\n${innerHtml}\n</${tag}>`);
  }

  private async _itemsHtml(): Promise<string> {
    const items = await Promise.all(this._block.children.map(async (c) => new ListItemToHtml(c).convert()));
    return Promise.resolve(items.join('\n'));
  }
}

const fromTypeToTag: Record<string, string> = {
  bulleted_list: 'ul',
  numbered_list: 'ol',
};
