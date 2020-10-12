import nock from 'nock';
import { resolve } from 'path';

import { Block } from '../../../../src/data/protocols/blocks';
import * as BlockMocks from '../../../mocks/blocks';
import { BlocksToHTML } from '../../../../src/data/usecases/blocks-to-html-converter/blocks-to-html-converter';
import { BlocksDispatcher } from '../../../../src/data/usecases/blocks-to-html-converter/blocks-dispatcher';
import { ListBlocksWrapper } from '../../../../src/data/usecases/blocks-to-html-converter/list-blocks-wrapper';
import { ToHtml } from '../../../../src/domain/usecases/to-html';
import { Base64Converter } from '../../../../src/utils/base-64-converter';
import base64Img from '../../../mocks/img/base64';

describe('#convert', () => {
  const makeSut = (blocks: Block[]): ToHtml => {
    const blockDispatcher = new BlocksDispatcher();
    const listBlocksWrapper = new ListBlocksWrapper();
    return new BlocksToHTML(blocks, blockDispatcher, listBlocksWrapper);
  };

  describe('When only a text block is given', () => {
    describe('When empty text block is given', () => {
      it('returns empty p tag', async () => {
        const html = await makeSut(BlockMocks.NO_TEXT).convert();

        expect(html).toBe('<p></p>');
      });
    });

    describe('When single text block is given', () => {
      it('returns html with p tag', async () => {
        const html = await makeSut(BlockMocks.SINGLE_TEXT).convert();

        expect(html).toBe('<p>Hello World</p>');
      });
    });

    describe('When single line text with bold part', () => {
      it('returns html with single p paragraph with strong tag nested', async () => {
        const html = await makeSut(BlockMocks.SINGLE_TEXT_WITH_BOLD).convert();

        expect(html).toBe('<p>Hello <strong>World</strong></p>');
      });
    });

    describe('When single line text with italic part', () => {
      it('returns html with single p paragraph with strong tag nested', async () => {
        const html = await makeSut(BlockMocks.SINGLE_TEXT_WITH_ITALIC).convert();

        expect(html).toBe('<p>Hello <em>World</em></p>');
      });
    });

    describe('When single line text with underline part', () => {
      it('returns html with single p paragraph with span tag and underline style nested', async () => {
        const html = await makeSut(BlockMocks.SINGLE_TEXT_WITH_UNDERLINE).convert();

        expect(html).toBe('<p>Hello <span style="text-decoration: underline;">World</span></p>');
      });
    });

    describe('When single line text with strikethrough part', () => {
      it('returns html with single p paragraph with del tag inside', async () => {
        const html = await makeSut(BlockMocks.SINGLE_TEXT_WITH_STRIKETHROUGH).convert();

        expect(html).toBe('<p>Hello <del>World</del></p>');
      });
    });

    describe('When single line text with code part', () => {
      it('returns html with single p paragraph with code tag inside', async () => {
        const html = await makeSut(BlockMocks.SINGLE_TEXT_WITH_CODE_DECORATION).convert();

        expect(html).toBe('<p>Hello <code>myVar</code></p>');
      });
    });

    describe('When single line text with link part', () => {
      it('returns html with single p paragraph with a tag with given link', async () => {
        const html = await makeSut(BlockMocks.SINGLE_TEXT_WITH_LINK).convert();

        expect(html).toBe('<p>Hello <a href="https://www.google.com" target="_blank">World</a></p>');
      });
    });

    describe('When single line text with inline equation part', () => {
      it('returns html with single p paragraph equation wrapped inside $$', async () => {
        const html = await makeSut(BlockMocks.SINGLE_TEXT_WITH_EQUATION_DECORATION).convert();

        expect(html).toBe('<p>Hello World $2x$</p>');
      });
    });

    describe('When single line text with color part', () => {
      it('returns html with single p paragraph with span tag and color style inside', async () => {
        const html = await makeSut(BlockMocks.SINGLE_TEXT_WITH_COLOR).convert();

        expect(html).toBe('<p><span style="color: #6940A5;">Hello</span></p>');
      });
    });

    describe('When single line text with color background part', () => {
      it('returns html with single p paragraph with span tag and background color style inside', async () => {
        const html = await makeSut(BlockMocks.SINGLE_TEXT_WITH_COLOR_BACKGROUND).convert();

        expect(html).toBe('<p><span style="background-color: #FBF3DB;">Hello</span></p>');
      });
    });

    describe('When single line text with bold and italic parts together', () => {
      it('returns html with single p paragraph with strong and em tags nested', async () => {
        const html = await makeSut(BlockMocks.SINGLE_TEXT_WITH_BOLD_AND_ITALIC).convert();

        expect(html).toBe('<p>Hello <em><strong>World</strong></em></p>');
      });
    });

    describe('When single line text with bold and italic parts apart', () => {
      it('returns html with single p paragraph with strong and em tags nested', async () => {
        const html = await makeSut(BlockMocks.TEXT_WITH_DECORATION).convert();

        expect(html).toBe(
          '<p>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> Sun</strong></em></p>',
        );
      });
    });

    describe('When multiline text block is given', () => {
      it('returns html with two p tags', async () => {
        const html = await makeSut(BlockMocks.MULTILINE_TEXT).convert();

        expect(html).toBe('<p>Hello World</br>Is everything alright?</br>Yes, Dude!</p>');
      });
    });

    describe('When text block has background color', () => {
      it('returns html p tag with style and background-color prop', async () => {
        const html = await makeSut(BlockMocks.TEXT_WITH_FORMAT).convert();

        expect(html).toBe('<p style="background-color: #FBE4E4; ">This is a text with red background</p>');
      });
    });
  });

  describe('When only a h1 title block is given', () => {
    describe('When single block is given', () => {
      it('returns html with h1 tag', async () => {
        const html = await makeSut(BlockMocks.H1_TEXT).convert();

        expect(html).toBe('<h1>This is a h1 title</h1>');
      });
    });

    describe('When single line header with decoration', () => {
      it('returns html with single h1 with decoration tags inside', async () => {
        const html = await makeSut(BlockMocks.H1_TEXT_WITH_DECORATIONS).convert();

        expect(html).toBe(
          '<h1>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> Sun</strong></em></h1>',
        );
      });
    });

    describe('When header block has background color', () => {
      it('returns html h1 tag with style and background-color prop', async () => {
        const html = await makeSut(BlockMocks.H1_WITH_FORMAT).convert();

        expect(html).toBe('<h1 style="background-color: #DDEDEA; ">This is a h1 with red background</h1>');
      });
    });
  });

  describe('When only a h2 title block is given', () => {
    describe('When single block is given', () => {
      it('returns html with h2 tag', async () => {
        const html = await makeSut(BlockMocks.H2_TEXT).convert();

        expect(html).toBe('<h2>This is a h2 title</h2>');
      });
    });

    describe('When single line h2 with decoration', () => {
      it('returns html with single h1 with decoration tags inside', async () => {
        const html = await makeSut(BlockMocks.H2_TEXT_WITH_DECORATIONS).convert();

        expect(html).toBe(
          '<h2>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> Sun</strong></em></h2>',
        );
      });
    });

    describe('When sub header block has background color', () => {
      it('returns html h2 tag with style and background-color prop', async () => {
        const html = await makeSut(BlockMocks.H2_WITH_FORMAT).convert();

        expect(html).toBe('<h2 style="background-color: #FBF3DB; ">This is a h2 with red background</h2>');
      });
    });
  });

  describe('When only a h3 title block is given', () => {
    describe('When single block is given', () => {
      it('returns html with h3 tag', async () => {
        const html = await makeSut(BlockMocks.H3_TEXT).convert();

        expect(html).toBe('<h3>This is a h3 title</h3>');
      });
    });

    describe('When single line h3 with decoration', () => {
      it('returns html with single h1 with decoration tags inside', async () => {
        const html = await makeSut(BlockMocks.H3_TEXT_WITH_DECORATIONS).convert();

        expect(html).toBe(
          '<h3>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> Sun</strong></em></h3>',
        );
      });
    });

    describe('When sub header block has background color', () => {
      it('returns html h3 tag with style and background-color prop', async () => {
        const html = await makeSut(BlockMocks.H3_WITH_FORMAT).convert();

        expect(html).toBe('<h3 style="background-color: #FAEBDD; ">This is a h3 with red background</h3>');
      });
    });
  });

  describe('When only an unordered list block is given', () => {
    describe('When single block is given', () => {
      it('returns html with ul tag with li tag inside', async () => {
        const html = await makeSut(BlockMocks.UNORDERED_LIST_WITH_SINGLE_ITEM).convert();

        expect(html).toBe('<ul>\n  <li>This is a test</li>\n</ul>');
      });
    });

    describe('When single block is given with background color', () => {
      it('returns html with ul tag with li tag inside and background', async () => {
        const html = await makeSut(BlockMocks.UNORDERED_LIST_WITH_SINGLE_ITEM_AND_FORMAT).convert();

        expect(html).toBe('<ul>\n  <li style="background-color: #E9E5E3; ">This is a item with background</li>\n</ul>');
      });
    });

    describe('When list block with two items is given', () => {
      it('returns html with ul tag with li tag inside', async () => {
        const html = await makeSut(BlockMocks.UNORDERED_LIST_WITH_TWO_ITEMS).convert();

        expect(html).toBe('<ul>\n  <li>This is a test</li>\n  <li>This is a test too</li>\n</ul>');
      });
    });

    describe('When single line unordered list with decoration', () => {
      it('returns html with ul tag with li tag and decorations tags inside', async () => {
        const html = await makeSut(BlockMocks.UNORDERED_LIST_WITH_DECORATED_ITEMS).convert();

        expect(html).toBe(
          '<ul>\n  <li>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> Sun</strong></em></li>\n</ul>',
        );
      });
    });
  });

  describe('When only an ordered list block is given', () => {
    describe('When single block is given', () => {
      it('returns html with ol tag with li tag inside', async () => {
        const html = await makeSut(BlockMocks.ORDERED_LIST_WITH_SINGLE_ITEM).convert();

        expect(html).toBe('<ol>\n  <li>This is a test</li>\n</ol>');
      });
    });

    describe('When single block is given with background color', () => {
      it('returns html with ul tag with li tag inside and background', async () => {
        const html = await makeSut(BlockMocks.ORDERED_LIST_WITH_SINGLE_ITEM_AND_FORMAT).convert();

        expect(html).toBe('<ol>\n  <li style="background-color: #E03E3E; ">This is a item with background</li>\n</ol>');
      });
    });

    describe('When list block with two items is given', () => {
      it('returns html with ol tag with li tag inside', async () => {
        const html = await makeSut(BlockMocks.ORDERED_LIST_WITH_TWO_ITEMS).convert();

        expect(html).toBe('<ol>\n  <li>This is a test</li>\n  <li>This is a test too</li>\n</ol>');
      });
    });

    describe('When single line ordered list with decoration', () => {
      it('returns html with ol tag with li tag and decorations tags inside', async () => {
        const html = await makeSut(BlockMocks.ORDERED_LIST_WITH_DECORATED_ITEMS).convert();

        expect(html).toBe(
          '<ol>\n  <li>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> Sun</strong></em></li>\n</ol>',
        );
      });
    });
  });

  describe('When only a to do list block is given', () => {
    describe('When single unchecked block is given', () => {
      it('returns html with a div and unchecked checkbox and label inside', async () => {
        const html = await makeSut(BlockMocks.TODO).convert();

        expect(html).toBe(`<div>
        <input type="checkbox" name="d1e33c43-5079-4e66-961a-df032d38d532">
        <label for="d1e33c43-5079-4e66-961a-df032d38d532">This is a test</label>
      </div>`);
      });
    });

    describe('When single checked block is given', () => {
      it('returns html with a div and checked checkbox and label inside', async () => {
        const html = await makeSut(BlockMocks.CHECKED_TODO).convert();

        expect(html).toBe(`<div>
        <input type="checkbox" checked name="d1e33c43-5079-4e66-961a-df032d38d532">
        <label for="d1e33c43-5079-4e66-961a-df032d38d532">This is a test</label>
      </div>`);
      });
    });

    describe('When to-do block with two items is given', () => {
      it('returns html with two divs and checkbox and label inside', async () => {
        const html = await makeSut(BlockMocks.UNCHECKED_AND_CHECKED_TODOS).convert();

        expect(html).toBe(
          `<div>
        <input type="checkbox" name="d1e33c43-5079-4e66-961a-df032d2332">
        <label for="d1e33c43-5079-4e66-961a-df032d2332">This is a test</label>
      </div>\n<div>
        <input type="checkbox" checked name="d1e33c43-5079-4e66-961a-df032d38d532">
        <label for="d1e33c43-5079-4e66-961a-df032d38d532">This is a test too</label>
      </div>`,
        );
      });
    });
  });

  describe('When single code block is given', () => {
    describe('When there are no style on code block', () => {
      it('returns html with pre tag and code tag inside', async () => {
        const html = await makeSut(BlockMocks.CODE).convert();

        expect(html).toBe(
          `<pre><code class="language-javascript">function test() {\n\tvar isTesting = true;\n\treturn isTesting;\n}</code></pre>`,
        );
      });
    });

    describe('When there are style on code block', () => {
      it('ignores styles and returns html with pre tag and code tag inside', async () => {
        const html = await makeSut(BlockMocks.CODE_WITH_DECORATION).convert();

        expect(html).toBe(
          `<pre><code class="language-javascript">function test() {\n\tvar isTesting = true;\n\treturn isTesting;\n}</code></pre>`,
        );
      });
    });
  });

  describe('When single quote block is given', () => {
    describe('When there are no style on quote block', () => {
      it('returns html with blockquote tag', async () => {
        const html = await makeSut(BlockMocks.QUOTE).convert();

        expect(html).toBe('<blockquote>This a quote</blockquote>');
      });
    });

    describe('When there are style on quote block', () => {
      it('returns html with blockquote tag and decorations inside', async () => {
        const html = await makeSut(BlockMocks.QUOTE_WITH_DECORATION).convert();

        expect(html).toBe(
          `<blockquote>Hello <em><strong>World </strong></em><strong>and</strong><em><strong> Sun</strong></em></blockquote>`,
        );
      });
    });
  });

  describe('When divider block is given', () => {
    it('returns html with hr tag', async () => {
      const html = await makeSut(BlockMocks.TEXT_BETWEEN_DIVIDER).convert();

      expect(html).toBe(`<p>This a text</p>\n<hr>\n<p>This a text too</p>`);
    });
  });

  describe('When equation block is given', () => {
    describe('When there is no equation content', () => {
      it('returns empty string', async () => {
        const html = await makeSut(BlockMocks.EMPTY_EQUATION).convert();

        expect(html).toBe('');
      });
    });

    describe('When there is no equation content', () => {
      it('returns html with div tag and equation class with equation inside', async () => {
        const html = await makeSut(BlockMocks.EQUATION).convert();

        expect(html).toBe(`<div class="equation">$$\\int 2xdx = x^2 + C$$</div>`);
      });
    });
  });

  describe('When video block is given', () => {
    describe('When it is not a youtube video', () => {
      it('returns empty string', async () => {
        const html = await makeSut(BlockMocks.NO_YOUTUBE_VIDEO).convert();

        expect(html).toBe('');
      });
    });

    describe('When it is a youtube video', () => {
      it('returns html with iframe tag', async () => {
        const html = await makeSut(BlockMocks.YOUTUBE_VIDEO).convert();

        expect(html).toBe(
          `<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/watch?v=8G80nuEyDN4" frameborder="0"/>`,
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
        const html = await makeSut(BlockMocks.IMAGE).convert();

        expect(html.replace(/\s/g, '')).toBe(
          `
        <figure>
          <img src="${base64Img}" alt="" >
        </figure>
        `.replace(/\s/g, ''),
        );
      });
    });

    describe('When image has caption', () => {
      it('returns html with img tag with src as base64 and alt attr with given caption', async () => {
        const html = await makeSut(BlockMocks.IMAGE_WITH_CAPTION).convert();

        expect(html.replace(/\s/g, '')).toBe(
          `
        <figure>
          <img src="${base64Img}" alt="It is a caption">
          <figcaption>It is a caption</figcaption>
        </figure>
        `.replace(/\s/g, ''),
        );
      });
    });

    describe('When image must have a table and block id attached to url', () => {
      it('it should attach block id to it', async () => {
        const base64ConverterSpy = jest.spyOn(Base64Converter, 'convert');
        const source = BlockMocks.IMAGE_WITH_CAPTION[0].properties.source;
        const id = BlockMocks.IMAGE_WITH_CAPTION[0].id;

        await makeSut(BlockMocks.IMAGE_WITH_CAPTION).convert();

        const expectedImageUrl = `https://www.notion.so/image/${encodeURIComponent(source)}?table=block&id=${id}`;
        expect(base64ConverterSpy).toBeCalledWith(expectedImageUrl);
      });
    });
  });

  describe('When unknown block is given', () => {
    it('returns empty string', async () => {
      const html = await makeSut(BlockMocks.UNKNOWN).convert();

      expect(html).toBe('');
    });
  });
});
