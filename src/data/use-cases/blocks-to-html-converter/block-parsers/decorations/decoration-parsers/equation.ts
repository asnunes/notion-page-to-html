import { Decoration } from '../../../../../../data/protocols/blocks';
import { ToHtml } from '../../../../../../domain/use-cases/to-html';

export class EquationDecorationToHtml implements ToHtml {
  private readonly _text: string;
  private readonly _decoration: Decoration;

  constructor(text: string, decoration: Decoration) {
    this._text = text;
    this._decoration = decoration;
  }

  async convert(): Promise<string> {
    const equation = this._decoration.value;
    return Promise.resolve(equation ? `$${equation}$` : '');
  }
}
