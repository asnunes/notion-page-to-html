import { Decoration } from 'data/protocols/blocks/decoration';
import { ToHtml } from 'domain/usecases/to-html';

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
    if (this._isBackground()) return `background: ${this._color};`;
    return `color: ${this._color};`;
  }

  private get _color(): string {
    return this._decoration.value?.split('_')[0] || 'black';
  }
}
