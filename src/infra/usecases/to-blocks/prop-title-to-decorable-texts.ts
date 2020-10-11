import { DecorableText } from '../../../data/protocols/blocks';
import { DecorationArrayToDecorations } from './decoration-array-to-decorations';

export class PropTitleToDecorableTexts {
  private readonly _title: any[] | undefined;

  constructor(title: any[] | undefined) {
    this._title = title;
  }

  toDecorableTexts(): DecorableText[] {
    if (!this._title) return [] as DecorableText[];

    return this._title.map((richText: any[]) => {
      const text = richText[0].toString();
      const decorationsArray = richText[1];

      return {
        text,
        decorations: new DecorationArrayToDecorations(decorationsArray).toDecorations(),
      };
    });
  }
}
