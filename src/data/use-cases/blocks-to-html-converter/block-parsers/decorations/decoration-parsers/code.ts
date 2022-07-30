import { ToHtml } from '../../../../../../domain/use-cases/to-html';

export class CodeDecorationToHtml implements ToHtml {
  private readonly _text: string;

  constructor(text: string) {
    this._text = text;
  }

  async convert(): Promise<string> {
    return Promise.resolve(`<code>${this._text}</code>`);
  }
}
