import { Format } from 'data/protocols/blocks/format';
import { foregroundColorToHex, backgroundColorToHex } from '../../helpers/color-to-hex';

export class FormatToStyle {
  private readonly _format: Format;

  constructor(format: Format) {
    this._format = format;
  }

  toStyle(): string {
    if (Object.keys(this._format).length === 0) return '';

    const styleProps = [];
    const blockColor = this._format.block_color;
    if (blockColor) styleProps.push(new BlockColorToProp(blockColor).toStyle());

    return ` style="${styleProps.join('')}"`;
  }
}

class BlockColorToProp {
  private readonly _blockColor: string;

  constructor(blockColor: string) {
    this._blockColor = blockColor;
  }

  toStyle(): string {
    if (this._isBackground()) return `background-color: ${backgroundColorToHex(this._blockColor)}; `;
    return `color: ${foregroundColorToHex(this._blockColor)}; `;
  }

  private _isBackground(): boolean {
    return !!this._blockColor?.includes('background');
  }
}
