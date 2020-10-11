import * as NotionApiMocks from '../../../mocks/notion-api-responses';
import * as BlockMocks from '../../../mocks/blocks';
import { NotionApiContentResponsesToBlocks } from '../../../../src/infra/usecases/to-blocks/notion-api-content-response-to-blocks';

describe('#toBlocks', () => {
  describe('when page with title and single text content is given', () => {
    it('converts to one single text block with given content', () => {
      const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_AND_TITLE_NOTION_API_CONTENT_RESPONSE;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual(BlockMocks.SINGLE_TEXT);
    });
  });

  describe('when page with text content with bold content is given', () => {
    it('converts to one block with two decorations', () => {
      const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_WITH_BOLD;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual(BlockMocks.SINGLE_TEXT_WITH_BOLD);
    });
  });

  describe('when page with text content with bold and italic content is given', () => {
    describe('when they are together', () => {
      it('converts to one block with two decorations', () => {
        const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_WITH_BOLD_AND_ITALIC_TOGETHER;
        const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

        const result = notionApiContentResponsesToBlocks.toBlocks();

        expect(result).toEqual(BlockMocks.SINGLE_TEXT_WITH_BOLD_AND_ITALIC);
      });
    });

    describe('when they are not together', () => {
      it('converts to one block with two decorations', () => {
        const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_WITH_BOLD_AND_ITALIC;
        const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

        const result = notionApiContentResponsesToBlocks.toBlocks();

        expect(result).toEqual(BlockMocks.SINGLE_TEXT_WITH_BOLD_AND_ITALIC_SEPARATED);
      });
    });
  });

  describe('when page with color text content is given', () => {
    it('converts to one block with decoration with value', () => {
      const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_WITH_COLOR;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual(BlockMocks.SINGLE_TEXT_WITH_COLOR);
    });
  });

  describe('when page with equation text content is given', () => {
    it('converts to one block with decoration with value', () => {
      const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_WITH_EQUATION;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual(BlockMocks.SINGLE_TEXT_WITH_EQUATION_DECORATION);
    });
  });

  describe('when page with link text content is given', () => {
    it('converts to one block with decoration with value', () => {
      const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_WITH_LINK;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual(BlockMocks.SINGLE_TEXT_WITH_LINK);
    });
  });

  describe('when page with youtube link', () => {
    it('converts to one block with decoration with value', () => {
      const notionApiContentResponses = NotionApiMocks.TEXT_WITH_VIDEO_NOTION_API_CONTENT_RESPONSE;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual(BlockMocks.TEXT_WITH_YOUTUBE_VIDEO);
    });
  });
});
