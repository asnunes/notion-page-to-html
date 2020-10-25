import { Block } from '../../protocols/blocks';
import { Base64Converter } from '../../../utils/base-64-converter';

export class PageBlockToIcon {
  private readonly _pageBlock: Block;

  constructor(pageBlock: Block) {
    this._pageBlock = pageBlock;
  }

  async toIcon(): Promise<string | null> {
    const icon = this._pageBlock.properties.page_icon;
    if (!icon) return Promise.resolve(null);
    if (!icon.startsWith('http')) return icon;

    const url = `https://www.notion.so/image/${encodeURIComponent(icon)}?table=block&id=${this._pageBlock.id}`;
    return Base64Converter.convert(url);
  }
}
