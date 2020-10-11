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
    if (this._isBackground()) return `background-color: ${this._color};`;
    return `color: ${foregroundColorTextToHEX[this._decoration.value || 'none'] || '#37352F'};`;
  }

  private get _color(): string {
    const colorText = this._decoration.value?.split('_')[0] || '';
    return foregroundColorTextToHEX[colorText] || '#37352F';
  }
}

const foregroundColorTextToHEX: Record<string, string> = {
  purple: '#6940A5',
  yellow: '#E9AB01',
  gray: '#9B9A97',
  brown: '#64473A',
  orange: '#D9730D',
  green: '#0F7B6C',
  blue: '#0B6E99',
  pink: '#AD1A72',
  red: '#E03E3E',
  none: '#37352F',
};
