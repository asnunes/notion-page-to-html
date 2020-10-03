const resolve = require('path').resolve;
const nock = require('nock');
const BlocksToTagInterface = require('../../src/interfaces/blocks-to-tag');
const base64Img = require('../mocks/img/base64');
const Base64Converter = require('../../src/interfaces/blocks-to-tag/block-parsers/image/base-64-converter');

describe('#parse', () => {
  describe('When only a text block is given', () => {
    describe('When empty text block is given', () => {
      it('returns empty p tag', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<p></p>');
      });
    });

    describe('When single text block is given', () => {
      it('returns html with p tag', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: { title: [['Hello World']] },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<p>Hello World</p>');
      });
    });

    describe('When single line text with bold part', () => {
      it('returns html with single p paragraph with strong tag nested', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello '], ['World', [['b']]]],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<p>Hello <strong>World</strong></p>');
      });
    });

    describe('When single line text with italic part', () => {
      it('returns html with single p paragraph with strong tag nested', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello '], ['World', [['i']]]],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<p>Hello <em>World</em></p>');
      });
    });

    describe('When single line text with underline part', () => {
      it('returns html with single p paragraph with span tag and underline style nested', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello '], ['World', [['_']]]],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<p>Hello <span style="text-decoration: underline;">World</span></p>');
      });
    });

    describe('When single line text with strikethrough part', () => {
      it('returns html with single p paragraph with del tag inside', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello '], ['World', [['s']]]],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<p>Hello <del>World</del></p>');
      });
    });

    describe('When single line text with code part', () => {
      it('returns html with single p paragraph with code tag inside', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello '], ['World', [['c']]]],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<p>Hello <code>World</code></p>');
      });
    });

    describe('When single line text with link part', () => {
      it('returns html with single p paragraph with a tag with given link', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: { title: [['Hello '], ['World', [['a', 'https://www.google.com']]]] },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(
          '<p>Hello <a href="https://www.google.com" target="_blank">World</a></p>'
        );
      });
    });

    describe('When single line text with inline equation part', () => {
      it('returns html with single p paragraph equation wrapped inside $$', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello World '], ['⁍', [['e', '2x']]]],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<p>Hello World $2x$</p>');
      });
    });

    describe('When single line text with color part', () => {
      it('returns html with single p paragraph with span tag and color style inside', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello', [['h', 'purple']]]],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<p><span style="color: purple;">Hello</span></p>');
      });
    });

    describe('When single line text with color background part', () => {
      it('returns html with single p paragraph with span tag and background color style inside', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello', [['h', 'yellow_background']]]],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<p><span style="background: yellow;">Hello</span></p>');
      });
    });

    describe('When single line text with bold and italic parts together', () => {
      it('returns html with single p paragraph with strong and em tags nested', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {
              title: [['Hello '], ['World', [['b'], ['i']]]],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<p>Hello <em><strong>World</strong></em></p>');
      });
    });

    describe('When single line text with bold and italic parts apart', () => {
      it('returns html with single p paragraph with strong and em tags nested', async () => {
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

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(
          '<p>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> sun</strong></em></p>'
        );
      });
    });

    describe('When multiline text block is given', () => {
      it('returns html with two p tags', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: { title: [['Hello World\nIs everything alright?\nYes, Dude!']] },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<p>Hello World</br>Is everything alright?</br>Yes, Dude!</p>');
      });
    });
  });

  describe('When only a h1 title block is given', () => {
    describe('When single block is given', () => {
      it('returns html with h1 tag', async () => {
        const contents = [
          {
            id: 'd1e33c43-5079-4e66-961a-df032d38d532',
            type: 'header',
            properties: {
              title: [['This is a title h1']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<h1>This is a title h1</h1>');
      });
    });

    describe('When single line header with decoration', () => {
      it('returns html with single h1 with decoration tags inside', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'header',
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

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(
          '<h1>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> sun</strong></em></h1>'
        );
      });
    });
  });

  describe('When only a h2 title block is given', () => {
    describe('When single block is given', () => {
      it('returns html with h2 tag', async () => {
        const contents = [
          {
            id: 'd1e33c43-5079-4e66-961a-df032d38d532',
            type: 'sub_header',
            properties: {
              title: [['This is a title h2']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<h2>This is a title h2</h2>');
      });
    });

    describe('When single line h2 with decoration', () => {
      it('returns html with single h1 with decoration tags inside', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'sub_header',
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

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(
          '<h2>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> sun</strong></em></h2>'
        );
      });
    });
  });

  describe('When only a h3 title block is given', () => {
    describe('When single block is given', () => {
      it('returns html with h3 tag', async () => {
        const contents = [
          {
            id: 'd1e33c43-5079-4e66-961a-df032d38d532',
            type: 'sub_sub_header',
            properties: {
              title: [['This is a title h3']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<h3>This is a title h3</h3>');
      });
    });

    describe('When single line h3 with decoration', () => {
      it('returns html with single h1 with decoration tags inside', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'sub_sub_header',
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

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(
          '<h3>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> sun</strong></em></h3>'
        );
      });
    });
  });

  describe('When only a unordered list block is given', () => {
    describe('When single block is given', () => {
      it('returns html with ul tag with li tag inside', async () => {
        const contents = [
          {
            id: 'd1e33c43-5079-4e66-961a-df032d38d532',
            type: 'bulleted_list',
            properties: {
              title: [['This is a test']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<ul><li>This is a test</li></ul>');
      });
    });

    describe('When list block with two items is given', () => {
      it('returns html with ul tag with li tag inside', async () => {
        const contents = [
          {
            id: 'd1e33c43-5079-4e66-961a-df032d38d532',
            type: 'bulleted_list',
            properties: {
              title: [['This is a test']],
            },
          },
          {
            id: 'd1e33c43-5079-4e66-961a-df032d38d532',
            type: 'bulleted_list',
            properties: {
              title: [['This is a test too']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<ul><li>This is a test</li>\n<li>This is a test too</li></ul>');
      });
    });

    describe('When single line unordered list with decoration', () => {
      it('returns html with ul tag with li tag and decorations tags inside', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'bulleted_list',
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

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(
          '<ul><li>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> sun</strong></em></li></ul>'
        );
      });
    });
  });

  describe('When only a ordered list block is given', () => {
    describe('When single block is given', () => {
      it('returns html with ol tag with li tag inside', async () => {
        const contents = [
          {
            id: 'd1e33c43-5079-4e66-961a-df032d38d532',
            type: 'numbered_list',
            properties: {
              title: [['This is a test']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<ol><li>This is a test</li></ol>');
      });
    });

    describe('When list block with two items is given', () => {
      it('returns html with ol tag with li tag inside', async () => {
        const contents = [
          {
            id: 'd1e33c43-5079-4e66-961a-df032d38d532',
            type: 'numbered_list',
            properties: {
              title: [['This is a test']],
            },
          },
          {
            id: 'd1e33c43-5079-4e66-961a-df032d38d532',
            type: 'numbered_list',
            properties: {
              title: [['This is a test too']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('<ol><li>This is a test</li>\n<li>This is a test too</li></ol>');
      });
    });

    describe('When single line unordered list with decoration', () => {
      it('returns html with ol tag with li tag and decorations tags inside', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'numbered_list',
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

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(
          '<ol><li>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> sun</strong></em></li></ol>'
        );
      });
    });
  });

  describe('When only a to do list block is given', () => {
    describe('When single unchecked block is given', () => {
      it('returns html with a div and unchecked checkbox and label inside', async () => {
        const contents = [
          {
            id: 'd1e33c43-5079-4e66-961a-df032d38d532',
            type: 'to_do',
            properties: {
              title: [['This is a test']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(`<div>
        <input type="checkbox" name="d1e33c43-5079-4e66-961a-df032d38d532">
        <label for="d1e33c43-5079-4e66-961a-df032d38d532">This is a test</label>
      </div>`);
      });
    });

    describe('When single checked block is given', () => {
      it('returns html with a div and checked checkbox and label inside', async () => {
        const contents = [
          {
            id: 'd1e33c43-5079-4e66-961a-df032d38d532',
            type: 'to_do',
            properties: {
              title: [['This is a test']],
              checked: [['Yes']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(`<div>
        <input type="checkbox" checked name="d1e33c43-5079-4e66-961a-df032d38d532">
        <label for="d1e33c43-5079-4e66-961a-df032d38d532">This is a test</label>
      </div>`);
      });
    });

    describe('When to-do block with two items is given', () => {
      it('returns html with two divs and checkbox and label inside', async () => {
        const contents = [
          {
            id: 'd1e33c43-5079-4e66-961a-df032d2332',
            type: 'to_do',
            properties: {
              title: [['This is a test']],
            },
          },
          {
            id: 'd1e33c43-5079-4e66-961a-df032d38d532',
            type: 'to_do',
            properties: {
              title: [['This is a test too']],
              checked: [['Yes']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(
          `<div>
        <input type="checkbox" name="d1e33c43-5079-4e66-961a-df032d2332">
        <label for="d1e33c43-5079-4e66-961a-df032d2332">This is a test</label>
      </div><div>
        <input type="checkbox" checked name="d1e33c43-5079-4e66-961a-df032d38d532">
        <label for="d1e33c43-5079-4e66-961a-df032d38d532">This is a test too</label>
      </div>`
        );
      });
    });

    describe('When single line unordered list with decoration', () => {
      it('returns html with ol tag with li tag and decorations tags inside', async () => {
        const contents = [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'numbered_list',
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

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(
          '<ol><li>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> sun</strong></em></li></ol>'
        );
      });
    });
  });

  describe('When single code block is given', () => {
    describe('When there are no style on code block', () => {
      it('returns html with pre tag and code tag inside', async () => {
        const contents = [
          {
            id: '479c7b34-6c22-4f2d-b947-8f47d02b48d6',
            type: 'code',
            properties: {
              title: [['function test() {\n\tvar isTesting = true;\n\treturn isTesting;\n}']],
              language: [['JavaScript']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(
          `<pre><code class="language-javascript">function test() {\n\tvar isTesting = true;\n\treturn isTesting;\n}</code></pre>`
        );
      });
    });
  });

  describe('When single code block is given', () => {
    describe('When there are style on code block', () => {
      it('ignores styles and returns html with pre tag and code tag inside', async () => {
        const contents = [
          {
            id: '479c7b34-6c22-4f2d-b947-8f47d02b48d6',
            type: 'code',
            properties: {
              title: [
                ['function test() {\n\tvar isTesting = true;\n\treturn '],
                ['isTesting', [['b']]],
                [';\n}'],
              ],
              language: [['JavaScript']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(
          `<pre><code class="language-javascript">function test() {\n\tvar isTesting = true;\n\treturn isTesting;\n}</code></pre>`
        );
      });
    });
  });

  describe('When single quote block is given', () => {
    describe('When there are no style on quote block', () => {
      it('returns html with blockquote tag', async () => {
        const contents = [
          {
            id: 'e0a0cfa3-1f64-438b-ac79-95e5c7ad4565',
            type: 'quote',
            properties: {
              title: [['This a quote']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(`<blockquote>This a quote</blockquote>`);
      });
    });
  });

  describe('When single quote block is given', () => {
    describe('When there are style on quote block', () => {
      it('returns html with blockquote tag and decorations inside', async () => {
        const contents = [
          {
            id: 'e0a0cfa3-1f64-438b-ac79-95e5c7ad4565',
            type: 'quote',
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

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(
          `<blockquote>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> sun</strong></em></blockquote>`
        );
      });
    });
  });

  describe('When divider block is given', () => {
    it('returns html with hr tag', async () => {
      const contents = [
        {
          id: 'e0a0cfa3-438b-ac79-95e5c7ad4565',
          type: 'text',
          properties: {
            title: [['This a text']],
          },
        },
        {
          id: 'e0a0cfa3-1f64-438b-ac79-95e5c7ad4565',
          type: 'divider',
        },
        {
          id: 'e0a0cfa3-438b-95e5c7ad4565',
          type: 'text',
          properties: {
            title: [['This a text']],
          },
        },
      ];

      const html = await new BlocksToTagInterface(contents).parse();

      expect(html).toBe(`<p>This a text</p><hr><p>This a text</p>`);
    });
  });

  describe('When equation block is given', () => {
    describe('When there is no equation content', () => {
      it('returns empty string', async () => {
        const contents = [
          {
            id: '9b01339a-9de6-4eb1-bd7a-4c6d537590c7',
            type: 'equation',
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('');
      });
    });

    describe('When there is no equation content', () => {
      it('returns html with div tag and equation class with equation inside', async () => {
        const contents = [
          {
            id: '9b01339a-9de6-4eb1-bd7a-4c6d537590c7',
            type: 'equation',
            properties: {
              title: [['\\int 2xdx = x^2 + C']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(`<div class="equation">$$\\int 2xdx = x^2 + C$$</div>`);
      });
    });
  });

  describe('When video block is given', () => {
    describe('When it is not a youtube video', () => {
      it('returns empty string', async () => {
        const contents = [
          {
            id: 'dcde43cb-7131-4687-8f22-c9789fa75f46',
            type: 'video',
            properties: { source: [['https://www.example.com/watch?v=8G80nuEyDN4']] },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe('');
      });
    });

    describe('When it is a youtube video', () => {
      it('returns html with iframe tag', async () => {
        const contents = [
          {
            id: 'dcde43cb-7131-4687-8f22-c9789fa75f46',
            type: 'video',
            properties: { source: [['https://www.youtube.com/watch?v=8G80nuEyDN4']] },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(
          `<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/watch?v=8G80nuEyDN4" frameborder="0"/>`
        );
      });
    });
  });

  describe('When image block is given', () => {
    beforeEach(() => {
      const imageSource =
        'https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bcedd078-56cd-4137-a28a-af16b5746874/767-50x50.jpg';
      const blockId = 'ec3b36fd-f77d-46b4-8592-5966488612b1';

      nock('https://www.notion.so')
        .get(`/image/${encodeURIComponent(imageSource)}?table=block&id=${blockId}`)
        .replyWithFile(200, resolve('__tests__/mocks/img/baseImage.jpeg'), {
          'content-type': 'image/jpeg',
        });
    });

    describe('When image has no caption', () => {
      it('returns html with img tag with src as base64', async () => {
        const imageSource =
          'https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bcedd078-56cd-4137-a28a-af16b5746874/767-50x50.jpg';
        const blockId = 'ec3b36fd-f77d-46b4-8592-5966488612b1';
        const contents = [
          {
            id: blockId,
            type: 'image',
            properties: {
              source: [[imageSource]],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(`<img src="${base64Img}" alt="" />`);
      });
    });

    describe('When image has caption', () => {
      it('returns html with img tag with src as base64 and alt attr with given caption', async () => {
        const imageSource =
          'https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bcedd078-56cd-4137-a28a-af16b5746874/767-50x50.jpg';
        const blockId = 'ec3b36fd-f77d-46b4-8592-5966488612b1';
        const contents = [
          {
            id: blockId,
            type: 'image',
            properties: {
              source: [[imageSource]],
              caption: [['It is a caption']],
            },
          },
        ];

        const html = await new BlocksToTagInterface(contents).parse();

        expect(html).toBe(`<img src="${base64Img}" alt="It is a caption" />`);
      });
    });

    describe('When image must have a table and block id attached to url', () => {
      it('it should attach block id to it', async () => {
        const imageSource =
          'https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bcedd078-56cd-4137-a28a-af16b5746874/767-50x50.jpg';
        const blockId = 'ec3b36fd-f77d-46b4-8592-5966488612b1';
        const base64ConverterSpy = jest.spyOn(Base64Converter, 'convert');
        const contents = [
          {
            id: blockId,
            type: 'image',
            properties: {
              source: [[imageSource]],
              caption: [['It is a caption']],
            },
          },
        ];

        await new BlocksToTagInterface(contents).parse();
        const expectedImageUrl = `https://www.notion.so/image/${encodeURIComponent(
          imageSource
        )}?table=block&id=${blockId}`;

        expect(base64ConverterSpy).toBeCalledWith(expectedImageUrl);
      });
    });
  });

  describe('When unknown block is given', () => {
    it('returns empty string', async () => {
      const contents = [
        {
          id: 'd1e33c43-5079-4e66-961a-df032d38d532',
          type: 'headdfafdafader',
          properties: {
            title: [['What?!']],
          },
        },
      ];

      const html = await new BlocksToTagInterface(contents).parse();

      expect(html).toBe('');
    });
  });
});
