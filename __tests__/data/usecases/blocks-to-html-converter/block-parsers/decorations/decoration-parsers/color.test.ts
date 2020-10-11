import { ColorDecorationToHtml } from '../../../../../../../src/data/usecases/blocks-to-html-converter/block-parsers/decorations/decoration-parsers/color';
import { Decoration } from '../../../../../../../src/data/protocols/blocks';

describe('#convert', () => {
  describe('When color is given as foreground color', () => {
    it('styles using css color property', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'purple' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toMatch('style="color:');
    });
  });

  describe('When color is given as background color', () => {
    it('styles using css background-color property', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'purple_background' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toMatch('style="background-color:');
    });
  });

  describe('When purple color is given as foreground color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'purple' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="color: #6940A5;">Text with color</span>');
    });
  });
});
