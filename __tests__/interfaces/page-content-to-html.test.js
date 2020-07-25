const PageContentToHtml = require('../../interfaces/page-content-to-html');

describe('#parse', () => {
  describe('When only a text block is given', () => {
    describe('When empty text block is given', () => {
      it('returns empty p tag', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe('<p></p>');
      });
    });

    describe('When single text block is given', () => {
      it('returns html with p tag', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: { title: [['Hello World']] },
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe('<p>Hello World</p>');
      });
    });

    describe('When single line text with bold part', () => {
      it('returns html with single p paragraph with strong tag nested', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello '], ['World', [['b']]]],
            },
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe('<p>Hello <strong>World</strong></p>');
      });
    });

    describe('When single line text with italic part', () => {
      it('returns html with single p paragraph with strong tag nested', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello '], ['World', [['i']]]],
            },
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe('<p>Hello <em>World</em></p>');
      });
    });

    describe('When single line text with underline part', () => {
      it('returns html with single p paragraph with span tag and underline style nested', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello '], ['World', [['_']]]],
            },
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe('<p>Hello <span style="text-decoration: underline;">World</span></p>');
      });
    });

    describe('When single line text with strikethrough part', () => {
      it('returns html with single p paragraph with del tag inside', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello '], ['World', [['s']]]],
            },
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe('<p>Hello <del>World</del></p>');
      });
    });

    describe('When single line text with code part', () => {
      it('returns html with single p paragraph with code tag inside', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello '], ['World', [['c']]]],
            },
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe('<p>Hello <code>World</code></p>');
      });
    });

    describe('When single line text with link part', () => {
      it('returns html with single p paragraph with a tag with given link', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: { title: [['Hello '], ['World', [['a', 'https://www.google.com']]]] },
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe(
          '<p>Hello <a href="https://www.google.com" target="_blank">World</a></p>'
        );
      });
    });

    describe('When single line text with inline equation part', () => {
      it('returns html with single p paragraph equation wrapped inside $$', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello World '], ['⁍', [['e', '2x']]]],
            },
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe('<p>Hello World $2x$</p>');
      });
    });

    describe('When single line text with color part', () => {
      it('returns html with single p paragraph with span tag and color style inside', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello', [['h', 'purple']]]],
            },
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe('<p><span style="color: purple;">Hello</span></p>');
      });
    });

    describe('When single line text with color background part', () => {
      it('returns html with single p paragraph with span tag and background color style inside', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello', [['h', 'yellow_background']]]],
            },
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe('<p><span style="background: yellow;">Hello</span></p>');
      });
    });

    describe('When single line text with bold and italic parts together', () => {
      it('returns html with single p paragraph with strong and em tags nested', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello '], ['World', [['b'], ['i']]]],
            },
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe('<p>Hello <em><strong>World</strong></em></p>');
      });
    });

    describe('When single line text with bold and italic parts apart', () => {
      it('returns html with single p paragraph with strong and em tags nested', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [
                ['Hello '],
                ['World ', [['b'], ['i']]],
                ['and', [['b']]],
                [' sun', [['b'], ['i']]],
              ],
            },
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe(
          '<p>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> sun</strong></em></p>'
        );
      });
    });

    describe('When multiline text block is given', () => {
      it('returns html with two p tags', () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: { title: [['Hello World\nIs everything alright?\nYes, Dude!']] },
          },
        ];

        const html = new PageContentToHtml(contents).parse();

        expect(html).toBe('<p>Hello World</br>Is everything alright?</br>Yes, Dude!</p>');
      });
    });
  });

  describe('When unknown block is given', () => {
    it('returns empty string', () => {
      const contents = [
        {
          id: 'd1e33c43-5079-4e66-961a-df032d38d532',
          type: 'headdfafdafader',
          properties: {
            title: [['What?!']],
          },
        },
      ];

      const html = new PageContentToHtml(contents).parse();

      expect(html).toBe('');
    });
  });
});
