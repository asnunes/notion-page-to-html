import { Decoration } from '../../../../../../data/protocols/blocks';
import { ToHtml } from '../../../../../../domain/use-cases/to-html';
import { foregroundColorToHex, backgroundColorToHex } from '../../../../../helpers/color-to-hex';

export class ColorDecorationToHtml implements ToHtml {
  private readonly _text: string;
  private readonly _decoration: Decoration;

  constructor(text: string, decoration: Decoration) {
    this._text = text;
    this._decoration = decoration;
  }

  async convert(): Promise<string> {
    return Promise.resolve(`<span style="${this._style}">${this._text}</span>`);
  }

  private _isBackground(): boolean {
    return !!this._decoration.value?.includes('_background');
  }

  private get _style() {
    const textColor = this._decoration.value || 'none';

    if (this._isBackground()) return `background-color: ${backgroundColorToHex(textColor)};`;
    return `color: ${foregroundColorToHex(textColor)};`;
  }
}
