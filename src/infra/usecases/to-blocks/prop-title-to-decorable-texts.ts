import { DecorableText, Decoration, DecorationTypes } from 'data/protocols/blocks';

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
        decorations: this._decorationArrayToDecorations(decorationsArray),
      };
    });
  }

  private _decorationArrayToDecorations(decorationsArray: string | string[][] | undefined): Decoration[] {
    if (!decorationsArray) return [] as Decoration[];

    return [
      {
        type: fromDecorationArrayTypeToDecorationType[decorationsArray[0][0]] || 'plain',
      },
    ];
  }
}

const fromDecorationArrayTypeToDecorationType: Record<string, DecorationTypes> = {
  b: 'bold',
  i: 'italic',
  _: 'underline',
  s: 'strikethrough',
  c: 'code',
  a: 'link',
  e: 'equation',
  h: 'color',
};
