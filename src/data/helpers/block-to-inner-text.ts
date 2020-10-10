import { Block } from 'data/protocols/blocks';

export const blockToInnerText = (block: Block): string => {
  const decorableTexts = block.decorableTexts;
  return decorableTexts ? decorableTexts.map((dt) => dt.text).join('') : '';
};
