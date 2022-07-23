import { ToHtml } from '../../../../../../domain/use-cases/to-html';

export class ItalicDecorationToHtml implements ToHtml {
  private readonly _text: string;

  constructor(text: string) {
    this._text = text;
  }

  async convert(): Promise<string> {
    return Promise.resolve(`<em>${this._text}</em>`);
  }
}
