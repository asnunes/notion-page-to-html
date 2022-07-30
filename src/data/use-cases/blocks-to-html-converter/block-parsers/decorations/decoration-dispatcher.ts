import { Decoration } from '../../../../../data/protocols/blocks/decoration';
import { ToHtml, ToHtmlClass } from '../../../../../domain/use-cases/to-html';
import * as DecorationParsers from './decoration-parsers';

export class DecoratorDispatcher {
  dispatch(text: string, decoration: Decoration): ToHtml {
    const ToHtmlConverter = fromDecorationTypeToParsers[decoration.type] || DecorationParsers.UnknownDecorationToHtml;
    return new ToHtmlConverter(text, decoration);
  }
}

const fromDecorationTypeToParsers: Record<string, ToHtmlClass> = {
  bold: DecorationParsers.BoldDecorationToHtml,
  italic: DecorationParsers.ItalicDecorationToHtml,
  strikethrough: DecorationParsers.StrikeThroughDecorationToHtml,
  code: DecorationParsers.CodeDecorationToHtml,
  underline: DecorationParsers.UnderlineDecorationToHtml,
  equation: DecorationParsers.EquationDecorationToHtml,
  link: DecorationParsers.LinkDecorationToHtml,
  color: DecorationParsers.ColorDecorationToHtml,
};
