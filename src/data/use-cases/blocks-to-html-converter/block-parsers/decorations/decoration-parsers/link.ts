import { Decoration } from '../../../../../../data/protocols/blocks';
import { ToHtml } from '../../../../../../domain/use-cases/to-html';

export class LinkDecorationToHtml implements ToHtml {
  private readonly _text: string;
  private readonly _decoration: Decoration;

  constructor(text: string, decoration: Decoration) {
    this._text = text;
    this._decoration = decoration;
  }

  async convert(): Promise<string> {
    return Promise.resolve(`<a href="${this._link}" target="_blank">${this._text}</a>`);
  }

  private get _link(): string {
    return this._decoration.value || '#';
  }
}
