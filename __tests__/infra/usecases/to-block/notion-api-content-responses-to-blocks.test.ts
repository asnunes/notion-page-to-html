import * as NotionApiMocks from '../../../mocks/notion-api-responses';
import { Block, Decoration } from '../../../../src/data/protocols/blocks';
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
});
