import { ToHtml } from '../../../../../../domain/use-cases/to-html';
export class UnderlineDecorationToHtml implements ToHtml {
  private readonly _text: string;

  constructor(text: string) {
    this._text = text;
  }

  async convert(): Promise<string> {
    return Promise.resolve(`<span style="text-decoration: underline;">${this._text}</span>`);
  }
}
