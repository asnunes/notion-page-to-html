import { Format } from 'data/protocols/blocks/format';
import { backgroundColorToHex } from '../../helpers/color-to-hex';

export class FormatToStyle {
  private readonly _format: Format;

  constructor(format: Format) {
    this._format = format;
  }

  toStyle(): string {
    if (Object.keys(this._format).length === 0) return '';

    const styleProps = [];
    const blockColor = this._format.block_color;
    if (blockColor) styleProps.push(`background-color: ${backgroundColorToHex(blockColor)}; `);

    return ` style="${styleProps.join('')}"`;
  }
}
