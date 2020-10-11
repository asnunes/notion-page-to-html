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

    it('do not preserves color value on style', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'purple_background' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).not.toMatch('purple_background');
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

  describe('When yellow color is given as background color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'yellow_background' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="background-color: #E9AB01;">Text with color</span>');
    });
  });

  describe('When gray color is given as foreground color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'gray' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="color: #9B9A97;">Text with color</span>');
    });
  });
});
