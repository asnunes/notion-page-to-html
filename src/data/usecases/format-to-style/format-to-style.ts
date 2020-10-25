import { Format } from 'data/protocols/blocks/format';
import { foregroundColorToHex, backgroundColorToHex } from '../../helpers/color-to-hex';

export class FormatToStyle {
  private readonly _format: Format;

  constructor(format: Format) {
    this._format = format;
  }

  toStyle(): string {
    const styleProps = [];

    const blockColor = this._format.block_color;
    if (blockColor) styleProps.push(new BlockColorToProp(blockColor).toStyle());

    const blockWidth = this._format.block_width;
    if (blockWidth) styleProps.push(new BlockWidthToProp(blockWidth).toStyle());

    if (styleProps.length === 0) return '';
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

class BlockWidthToProp {
  private readonly _blockWidth: number;

  constructor(blockWidth: number) {
    this._blockWidth = blockWidth;
  }

  toStyle(): string {
    return `width: ${this._blockWidth}px; `;
  }
}
