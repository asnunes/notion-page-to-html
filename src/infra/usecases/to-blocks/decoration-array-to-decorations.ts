import { Decoration, DecorationType } from '../../../data/protocols/blocks';

export class DecorationArrayToDecorations {
  private readonly _decorationsArray: Array<any>;

  constructor(decorationsArray: Array<any>) {
    this._decorationsArray = decorationsArray;
  }

  toDecorations(): Decoration[] {
    if (!this._decorationsArray) return [] as Decoration[];

    return this._decorationsArray.map((decorations) => {
      const [type, value] = decorations;

      return {
        type: fromDecorationArrayTypeToDecorationType[type] || 'plain',
        ...(value && { value }),
      };
    });
  }
}

const fromDecorationArrayTypeToDecorationType: Record<string, DecorationType> = {
  b: 'bold',
  i: 'italic',
  _: 'underline',
  s: 'strikethrough',
  c: 'code',
  a: 'link',
  e: 'equation',
  h: 'color',
};
