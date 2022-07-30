import { ColorDecorationToHtml } from './color';
import { Decoration } from '../../../../../protocols/blocks';

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

  describe('When yellow color is given as color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'yellow' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="color: #E9AB01;">Text with color</span>');
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

  describe('When brown color is given as color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'brown' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="color: #64473A;">Text with color</span>');
    });
  });

  describe('When orange color is given as foreground color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'orange' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="color: #D9730D;">Text with color</span>');
    });
  });

  describe('When green color is given as foreground color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'green' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="color: #0F7B6C;">Text with color</span>');
    });
  });

  describe('When pink color is given as foreground color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'pink' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="color: #AD1A72;">Text with color</span>');
    });
  });

  describe('When red color is given as foreground color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'red' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="color: #E03E3E;">Text with color</span>');
    });
  });

  describe('When unknown color is given as foreground color', () => {
    it('converts to equivalent default foreground color hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'refafad' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="color: #37352F;">Text with color</span>');
    });
  });

  describe('When no color value is given as foreground color', () => {
    it('converts to equivalent default foreground color hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="color: #37352F;">Text with color</span>');
    });
  });

  describe('When gray color is given as background color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'gray_background' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="background-color: #B4AEAE;">Text with color</span>');
    });
  });

  describe('When brown color is given as background color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'brown_background' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="background-color: #E9E5E3;">Text with color</span>');
    });
  });

  describe('When orange color is given as background color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'orange_background' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="background-color: #FAEBDD;">Text with color</span>');
    });
  });

  describe('When yellow color is given as background color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'yellow_background' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="background-color: #FBF3DB;">Text with color</span>');
    });
  });

  describe('When green color is given as background color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'green_background' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="background-color: #DDEDEA;">Text with color</span>');
    });
  });

  describe('When blue color is given as background color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'blue_background' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="background-color: #DDEBF1;">Text with color</span>');
    });
  });

  describe('When purple color is given as background color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'purple_background' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="background-color: #EAE4F2;">Text with color</span>');
    });
  });

  describe('When pink color is given as background color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'pink_background' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="background-color: #F4DFEB;">Text with color</span>');
    });
  });

  describe('When red color is given as background color', () => {
    it('converts to equivalent hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'red_background' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="background-color: #FBE4E4;">Text with color</span>');
    });
  });

  describe('When unknown color is given as background color', () => {
    it('converts to equivalent default background color hex code and apply style to html', async () => {
      const text = 'Text with color';
      const decoration: Decoration = { type: 'color', value: 'refafad_background' };

      const result = await new ColorDecorationToHtml(text, decoration).convert();

      expect(result).toBe('<span style="background-color: #FFFFFF;">Text with color</span>');
    });
  });
});
