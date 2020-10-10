import nock from 'nock';
import { NotionPageToHtml } from '../../src/main/usecases/notion-api-to-html/notion-page-to-html';
import { InvalidPageUrlError } from '../../src/infra/errors/invalid-page-url';
import * as NotionApiMocks from '../mocks/notion-api-responses';
import * as HTML_RESPONSES from '../mocks/html';

describe('#convert', () => {
  describe('When page is valid', () => {
    const pageId = '4d64bbc0634d4758befa85c5a3a6c22f';

    beforeEach(() => {
      nock('https://www.notion.so')
        .post('/api/v3/loadPageChunk', (body) => body.pageId.replace(/-/g, '') === pageId)
        .reply(200, NotionApiMocks.SUCCESSFUL_PAGE_CHUCK);

      nock('https://www.notion.so').post('/api/v3/getRecordValues').reply(200, NotionApiMocks.SUCCESSFUL_RECORDS);
    });

    describe('When no options is given', () => {
      it('returns full html when full url is given', async () => {
        const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

        const response = await NotionPageToHtml.convert(url);

        expect(response.replace(/\s/g, '')).toEqual(HTML_RESPONSES.FULL_DOCUMENT.replace(/\s/g, ''));
      });

      it('returns full html when short url is given', async () => {
        const url = `https://www.notion.so/${pageId}`;

        const response = await NotionPageToHtml.convert(url);

        expect(response.replace(/\s/g, '')).toEqual(HTML_RESPONSES.FULL_DOCUMENT.replace(/\s/g, ''));
      });
    });

    describe('When excludeTitle is given', () => {
      it('returns without title', async () => {
        const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

        const response = await NotionPageToHtml.convert(url, {
          excludeTitle: true,
        });

        expect(response.replace(/\s/g, '')).toEqual(HTML_RESPONSES.DOCUMENT_WITHOUT_TITLE.replace(/\s/g, ''));
      });
    });

    describe('When excludeCSS is given', () => {
      it('returns without style tag', async () => {
        const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

        const response = await NotionPageToHtml.convert(url, {
          excludeCSS: true,
        });

        expect(response.replace(/\s/g, '')).toEqual(HTML_RESPONSES.DOCUMENT_WITHOUT_CSS.replace(/\s/g, ''));
      });
    });

    describe('When excludeMetadata is given', () => {
      it('returns without metatags', async () => {
        const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

        const response = await NotionPageToHtml.convert(url, {
          excludeMetadata: true,
        });

        expect(response.replace(/\s/g, '')).toEqual(HTML_RESPONSES.DOCUMENT_METADATA.replace(/\s/g, ''));
      });
    });

    describe('When excludeScripts is given', () => {
      it('returns without script tags', async () => {
        const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

        const response = await NotionPageToHtml.convert(url, {
          excludeScripts: true,
        });

        expect(response.replace(/\s/g, '')).toEqual(HTML_RESPONSES.DOCUMENT_WITHOUT_SCRIPTS.replace(/\s/g, ''));
      });
    });

    describe('When bodyContentOnly is given', () => {
      it('returns body content only', async () => {
        const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

        const response = await NotionPageToHtml.convert(url, {
          bodyContentOnly: true,
        });

        expect(response).toEqual(HTML_RESPONSES.BODY_ONLY);
      });

      it('accepts parse method too', async () => {
        nock('https://www.notion.so').post('/api/v3/loadPageChunk').reply(200, NotionApiMocks.SUCCESSFUL_PAGE_CHUCK);

        nock('https://www.notion.so').post('/api/v3/getRecordValues').reply(200, NotionApiMocks.SUCCESSFUL_RECORDS);

        const response = await NotionPageToHtml.parse(
          'https://www.notion.so/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f',
          false,
        );

        expect(response).toEqual(HTML_RESPONSES.BODY_ONLY);
      });
    });
  });

  describe('When wrong link is given', () => {
    it('throws invalid page url error', async () => {
      nock('https://www.notion.so').post('/api/v3/loadPageChunk').reply(200, NotionApiMocks.SUCCESSFUL_PAGE_CHUCK);

      nock('https://www.notion.so').post('/api/v3/getRecordValues').reply(200, NotionApiMocks.SUCCESSFUL_RECORDS);

      const response = () =>
        NotionPageToHtml.convert('https://www.example.com/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f');

      await expect(response).rejects.toThrow(
        new InvalidPageUrlError('https://www.example.com/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f'),
      );
    });
  });
});
