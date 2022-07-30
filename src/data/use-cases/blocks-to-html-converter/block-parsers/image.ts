import { Block } from '../../../protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';
import { Base64Converter } from '../../../../utils/base-64-converter';
import { FormatToStyle } from '../../format-to-style';

export class ImageBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    if (!this._rawSrc) return '';

    const imageSource = await Base64Converter.convert(this._rawSrc);
    const caption = this._caption;
    const style = new FormatToStyle(this._block.format).toStyle();

    return `
<figure class="image">
<img src="${imageSource}" alt="${caption}"${style}>
${caption !== '' ? `<figcaption>${caption}</figcaption>` : ''}
</figure>
    `;
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
