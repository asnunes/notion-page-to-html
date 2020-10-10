import { Block } from 'data/protocols/blocks';
import { ToHtml } from 'domain/usecases/to-html';
import { Base64Converter } from './base-64-converter';

export class ImageBlockToHtml implements ToHtml {
  private _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    if (!this._rawSrc) return '';

    const imageSource = await Base64Converter.convert(this._rawSrc);
    return `<img src="${imageSource}" alt="${this._caption}" />`;
  }

  private get _rawSrc() {
    const url = this._block.properties.source;
    if (!url) return;

    return `https://www.notion.so/image/${encodeURIComponent(url)}?table=block&id=${this._block.id}`;
  }

  private get _caption() {
    return this._block.properties.caption || '';
  }
}
