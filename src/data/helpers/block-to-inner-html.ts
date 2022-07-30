import { Block, DecorableText } from '../protocols/blocks';
import { Decorator } from '../use-cases/blocks-to-html-converter/block-parsers/decorations/decorator';
import { replaceLineBreakByBrTag } from './replace-line-break-to-br-tag';

export const blockToInnerHtml = async (block: Block): Promise<string> => {
  const decorator = new Decorator(block.decorableTexts || ([] as DecorableText[]));
  const decoratedText = await decorator.decorate();
  return Promise.resolve(replaceLineBreakByBrTag(decoratedText));
};
