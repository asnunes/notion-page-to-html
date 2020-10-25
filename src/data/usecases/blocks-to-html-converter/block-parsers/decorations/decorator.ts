import { DecorableText } from '../../../../../data/protocols/blocks/decorable-text';
import { DecoratorDispatcher } from './decoration-dispatcher';

export class Decorator {
  private readonly _decorableTexts: DecorableText[];

  constructor(decorableTexts: DecorableText[]) {
    this._decorableTexts = decorableTexts;
  }

  async decorate(): Promise<string> {
    const decorableTextsByDecorators = await Promise.all(
      this._decorableTexts.map(await this._decorateByDecorableText.bind(this)),
    );
    return Promise.resolve(decorableTextsByDecorators.join(''));
  }

  async _decorateByDecorableText(decorableText: DecorableText): Promise<string> {
    let html = decorableText.text;
    for (const decoration of decorableText.decorations) {
      const decorator = new DecoratorDispatcher().dispatch(html, decoration);
      html = await decorator.convert();
    }

    return Promise.resolve(html);
  }
}
