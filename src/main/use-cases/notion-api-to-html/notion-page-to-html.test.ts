import nock from 'nock';
import { resolve } from 'path';
import { NotionPageToHtml } from './index';
import { InvalidPageUrlError } from '../../../infra/errors';
import * as NotionApiMocks from '../../../__tests__/mocks/notion-api-responses';
import * as HTML_RESPONSES from '../../../__tests__/mocks/html';
import base64 from '../../../__tests__/mocks/img/base64';

describe('#convert', () => {
  describe('When page is valid', () => {
    const pageId = '4d64bbc0634d4758befa85c5a3a6c22f';

    beforeEach(() => {
      nock('https://www.notion.so')
        .post('/api/v3/loadPageChunk', (body) => body.pageId.replace(/-/g, '') === pageId)
        .reply(200, NotionApiMocks.SUCCESSFUL_PAGE_CHUCK);

      nock('https://www.notion.so').post('/api/v3/getRecordValues').reply(200, NotionApiMocks.SUCCESSFUL_RECORDS);

      nock('https://www.notion.so')
        .get('/image/https%3A%2F%2Fwww.example.com%2Fimage.png')
        .query({
          table: 'block',
          id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
        })
        .replyWithFile(200, resolve('src/__tests__/mocks/img/baseImage.jpeg'), {
          'content-type': 'image/jpeg',
        });
    });

    describe('When no options is given', () => {
      it('returns full html when full url is given', async () => {
        const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

        const response = await NotionPageToHtml.convert(url);

        expect(response.html.replace(/\s/g, '')).toEqual(HTML_RESPONSES.FULL_DOCUMENT.replace(/\s/g, ''));
      });

      it('returns full html when short url is given', async () => {
        const url = `https://www.notion.so/${pageId}`;

        const response = await NotionPageToHtml.convert(url);

        expect(response.html.replace(/\s/g, '')).toEqual(HTML_RESPONSES.FULL_DOCUMENT.replace(/\s/g, ''));
      });

      it('returns page title in title prop', async () => {
        const url = `https://www.notion.so/${pageId}`;

        const response = await NotionPageToHtml.convert(url);

        expect(response.title).toEqual('Simple Page Test');
      });

      it('returns page cover in cover prop', async () => {
        const url = `https://www.notion.so/${pageId}`;

        const response = await NotionPageToHtml.convert(url);

        expect(response.cover).toEqual(base64);
      });

      it('returns page icon in icon prop', async () => {
        const url = `https://www.notion.so/${pageId}`;

        const response = await NotionPageToHtml.convert(url);

        expect(response.icon).toEqual('🤴');
      });
    });

    describe('When excludeTitleFromHead is given', () => {
      it('returns without title', async () => {
        const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

        const response = await NotionPageToHtml.convert(url, {
          excludeTitleFromHead: true,
        });

        expect(response.html.replace(/\s/g, '')).toEqual(HTML_RESPONSES.DOCUMENT_WITHOUT_TITLE.replace(/\s/g, ''));
      });
    });

    describe('When excludeCSS is given', () => {
      it('returns without style tag', async () => {
        const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

        const response = await NotionPageToHtml.convert(url, {
          excludeCSS: true,
        });

        expect(response.html.replace(/\s/g, '')).toEqual(HTML_RESPONSES.DOCUMENT_WITHOUT_CSS.replace(/\s/g, ''));
      });
    });

    describe('When excludeMetadata is given', () => {
      it('returns without metatags', async () => {
        const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

        const response = await NotionPageToHtml.convert(url, {
          excludeMetadata: true,
        });

        expect(response.html.replace(/\s/g, '')).toEqual(HTML_RESPONSES.DOCUMENT_METADATA.replace(/\s/g, ''));
      });
    });

    describe('When excludeScripts is given', () => {
      it('returns without script tags', async () => {
        const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

        const response = await NotionPageToHtml.convert(url, {
          excludeScripts: true,
        });

        expect(response.html.replace(/\s/g, '')).toEqual(HTML_RESPONSES.DOCUMENT_WITHOUT_SCRIPTS.replace(/\s/g, ''));
      });
    });

    describe('When excludeHeaderFromBody is given', () => {
      it('returns body content only without header', async () => {
        const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

        const response = await NotionPageToHtml.convert(url, {
          excludeHeaderFromBody: true,
        });

        expect(response.html.replace(/\s/g, '')).toEqual(
          HTML_RESPONSES.FULL_DOCUMENT_WITHOUT_HEADER_IN_BODY.replace(/\s/g, ''),
        );
      });
    });

    describe('When bodyContentOnly is given', () => {
      it('returns body content only', async () => {
        const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

        const response = await NotionPageToHtml.convert(url, {
          bodyContentOnly: true,
        });

        expect(response.html.replace(/\s/g, '')).toEqual(HTML_RESPONSES.BODY_ONLY.replace(/\s/g, ''));
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
