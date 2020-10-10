import * as NotionApiMocks from '../../../mocks/notion-api-responses';
import { Block, Decoration, DecorableText } from '../../../../src/data/protocols/blocks';
import { NotionApiContentResponsesToBlocks } from '../../../../src/infra/usecases/to-blocks/notion-api-content-response-to-blocks';

describe('#toBlocks', () => {
  describe('when page with title and single text content is given', () => {
    it('converts to one single text block with given content', () => {
      const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_AND_TITLE_NOTION_API_CONTENT_RESPONSE;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual([
        {
          id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
          type: 'text',
          properties: {},
          children: [] as Block[],
          decorableTexts: [
            {
              text: 'Hello World',
              decorations: [] as Decoration[],
            },
          ],
        },
      ]);
    });
  });

  describe('when page with text content with bold content is given', () => {
    it('converts to one block with two decorations', () => {
      const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_WITH_BOLD;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual([
        {
          id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
          type: 'text',
          properties: {},
          children: [] as Block[],
          decorableTexts: [
            {
              text: 'Hello ',
              decorations: [] as Decoration[],
            },
            {
              text: 'World',
              decorations: [{ type: 'bold' }],
            },
          ],
        },
      ]);
    });
  });

  describe('when page with text content with bold and italic content is given', () => {
    describe('when they are together', () => {
      it('converts to one block with two decorations', () => {
        const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_WITH_BOLD_AND_ITALIC_TOGETHER;
        const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

        const result = notionApiContentResponsesToBlocks.toBlocks();

        expect(result).toEqual([
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {},
            children: [] as Block[],
            decorableTexts: [
              {
                text: 'Hello ',
                decorations: [] as Decoration[],
              },
              {
                text: 'World',
                decorations: [{ type: 'bold' }, { type: 'italic' }],
              },
            ],
          },
        ]);
      });
    });

    describe('when they are not together', () => {
      it('converts to one block with two decorations', () => {
        const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_WITH_BOLD_AND_ITALIC;
        const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

        const result = notionApiContentResponsesToBlocks.toBlocks();

        expect(result).toEqual([
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {},
            children: [] as Block[],
            decorableTexts: [
              {
                text: 'Hello ',
                decorations: [{ type: 'bold' }],
              },
              {
                text: 'World',
                decorations: [{ type: 'italic' }],
              },
            ],
          },
        ]);
      });
    });
  });

  describe('when page with color text content is given', () => {
    it('converts to one block with decoration with value', () => {
      const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_WITH_COLOR;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual([
        {
          id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
          type: 'text',
          properties: {},
          children: [] as Block[],
          decorableTexts: [
            {
              text: 'Hello',
              decorations: [{ type: 'color', value: 'purple' }],
            },
          ],
        },
      ]);
    });
  });

  describe('when page with equation text content is given', () => {
    it('converts to one block with decoration with value', () => {
      const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_WITH_EQUATION;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual([
        {
          id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
          type: 'text',
          properties: {},
          children: [] as Block[],
          decorableTexts: [
            {
              text: 'Hello World',
              decorations: [] as Decoration[],
            },
            {
              text: '⁍',
              decorations: [{ type: 'equation', value: '2x' }],
            },
          ],
        },
      ]);
    });
  });

  describe('when page with link text content is given', () => {
    it('converts to one block with decoration with value', () => {
      const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_WITH_LINK;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual([
        {
          id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
          type: 'text',
          properties: {},
          children: [] as Block[],
          decorableTexts: [
            {
              text: 'Hello ',
              decorations: [] as Decoration[],
            },
            {
              text: 'World',
              decorations: [{ type: 'link', value: 'https://www.google.com' }],
            },
          ],
        },
      ]);
    });
  });

  describe('when page with youtube link', () => {
    it('converts to one block with decoration with value', () => {
      const notionApiContentResponses = NotionApiMocks.TEXT_WITH_VIDEO_NOTION_API_CONTENT_RESPONSE;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual([
        {
          id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
          type: 'text',
          properties: {},
          children: [] as Block[],
          decorableTexts: [
            {
              text: 'Hello World',
              decorations: [] as Decoration[],
            },
          ],
        },
        {
          id: 'dcde43cb-7131-4687-8f22-c9789fa75f46',
          type: 'video',
          properties: {
            source: 'https://www.youtube.com/watch?v=xBFqxBfLJWc',
          },
          children: [] as Block[],
          decorableTexts: [] as DecorableText[],
        },
      ]);
    });
  });
});
