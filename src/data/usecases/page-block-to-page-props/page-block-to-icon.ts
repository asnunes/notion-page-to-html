import { Block } from '../../protocols/blocks';
import { Base64Converter } from '../../../utils/base-64-converter';

export class PageBlockToIcon {
  private readonly _pageBlock: Block;

  constructor(pageBlock: Block) {
    this._pageBlock = pageBlock;
  }

  async toIcon(): Promise<string | null> {
    const icon = this._pageBlock.format.page_icon;
    if (!icon) return Promise.resolve(null);
    if (!icon.startsWith('http')) return icon;

    const url = `https://www.notion.so/image/${encodeURIComponent(icon)}?table=block&id=${this._pageBlock.id}`;
    return Base64Converter.convert(url);
  }
}

// https://www.notion.so/image/https%3A%2F%2Fwww.example.com%2Fsome_image.png?table=block&id=4d64bbc0-634d-4758-befa-85c5a3a6c22f
// https://www.notion.so/image/https%3A%2F%2Fwww.example.com%2Fsome_image.png?table=block&id=4d64bbc0-634d-4758-befa-85c5a3a6c22f
