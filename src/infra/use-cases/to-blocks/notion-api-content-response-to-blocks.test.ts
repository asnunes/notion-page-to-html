import * as NotionApiMocks from '../../../__tests__/mocks/notion-api-responses';
import * as BlockMocks from '../../../__tests__/mocks/blocks';
import { NotionApiContentResponsesToBlocks } from './notion-api-content-response-to-blocks';

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

  describe('when page with format is given', () => {
    it('passes format prop to block', () => {
      const notionApiContentResponses = NotionApiMocks.SINGLE_TEXT_WITH_FORMAT;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual(BlockMocks.SINGLE_TEXT_WITH_FORMAT);
    });
  });

  describe('when page with custom image size is given', () => {
    it('passes block_width to format', () => {
      const notionApiContentResponses = NotionApiMocks.IMAGE_WITH_CUSTOM_SIZE;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual(BlockMocks.IMAGE_WITH_CUSTOM_SIZE);
    });
  });

  describe('when page with page_icon in format is given', () => {
    it('passes format prop to properties', () => {
      const notionApiContentResponses = NotionApiMocks.CALLOUT_WITH_PAGE_ICON;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual(BlockMocks.CALLOUT);
    });
  });

  describe('when page with youtube link', () => {
    it('converts to one block with decoration with value', () => {
      const notionApiContentResponses = NotionApiMocks.VIDEO_NOTION_API_CONTENT_RESPONSE;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual(BlockMocks.PAGE_WITH_YOUTUBE_VIDEO);
    });
  });

  describe('when page with page cover and page cover position is given', () => {
    it('converts to page block with page_cover and page_conver_position in format prop', () => {
      const notionApiContentResponses = NotionApiMocks.SINGLE_PAGE_WITH_COVER_IMAGE;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual(BlockMocks.PAGE_WITH_TITLE_AND_COVER_IMAGE);
    });
  });

  describe('when page with page icon is given', () => {
    it('converts to page block with page_icon in format prop', () => {
      const notionApiContentResponses = NotionApiMocks.SINGLE_PAGE_WITH_ICON;
      const notionApiContentResponsesToBlocks = new NotionApiContentResponsesToBlocks(notionApiContentResponses);

      const result = notionApiContentResponsesToBlocks.toBlocks();

      expect(result).toEqual(BlockMocks.PAGE_WITH_TITLE_AND_ICON);
    });
  });
});
