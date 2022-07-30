import { blockToInnerHtml } from '../../../helpers/block-to-inner-html';
import { Block } from '../../../protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';
import { FormatToStyle } from '../../format-to-style';
import { Base64Converter } from '../../../../utils/base-64-converter';

export class CalloutBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    const style = new FormatToStyle(this._block.format).toStyle();
    const iconHtml = await new IconToHtml(this._block.properties.page_icon, this._block.id).toHtml();

    return Promise.resolve(`
<div class="callout"${style}>
${iconHtml}
<p>${await blockToInnerHtml(this._block)}</p>
</div>
    `);
  }
}

class IconToHtml {
  private readonly _icon: string | undefined;
  private readonly _id: string;

  constructor(icon: string | undefined, id: string) {
    this._icon = icon;
    this._id = id;
  }

  async toHtml(): Promise<string> {
    if (!this._icon) return `<div class="callout-emoji">💡</div>`;
    if (!this._icon.startsWith('http')) return `<div class="callout-emoji">${this._icon}</div>`;

    const url = `https://www.notion.so/image/${encodeURIComponent(this._icon)}?table=block&id=${this._id}`;
    const imageSource = await Base64Converter.convert(url);
    const caption = 'callout icon';
    return `<div class="callout-image"><img src="${imageSource}" alt="${caption}"></div>`;
  }
}
