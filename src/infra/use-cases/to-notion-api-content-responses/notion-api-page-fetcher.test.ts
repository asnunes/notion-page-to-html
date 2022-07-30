import nock from 'nock';
import { NotionApiPageFetcher } from './notion-api-page-fetcher';
import { NotionPageIdValidator, PageRecordValidator, PageChunkValidator } from './services';
import { NodeHttpPostClient } from '../http-post/node-http-post-client';
import { MissingContentError, MissingPageIdError, NotionPageAccessError } from '../../errors';
import * as NotionApiMocks from '../../../__tests__/mocks/notion-api-responses';

describe('#getNotionPageContents', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  const makeSut = (notionPageId: string): NotionApiPageFetcher => {
    const httpPostClient = new NodeHttpPostClient();
    const notionPageIdValidator = new NotionPageIdValidator();
    const pageRecordValidator = new PageRecordValidator();
    const pageChunkValidator = new PageChunkValidator();

    return new NotionApiPageFetcher(
      notionPageId,
      httpPostClient,
      notionPageIdValidator,
      pageRecordValidator,
      pageChunkValidator,
    );
  };

  describe('when notion page id is valid and page is public', () => {
    it('returns NotionApiContentResponse object with page content when page is valid', async () => {
      nock('https://www.notion.so').post('/api/v3/loadPageChunk').reply(200, NotionApiMocks.SUCCESSFUL_PAGE_CHUCK);
      nock('https://www.notion.so').post('/api/v3/getRecordValues').reply(200, NotionApiMocks.SUCCESSFUL_RECORDS);
      const notionPageId = '4d64bbc0-634d-4758-befa-85c5a3a6c22f';
      const apiInterface = makeSut(notionPageId);

      const response = await apiInterface.getNotionPageContents();

      expect(response).toEqual(NotionApiMocks.TEXT_NOTION_API_CONTENT_RESPONSE);
    });

    it('passes its children when it is available', async () => {
      nock('https://www.notion.so')
        .post('/api/v3/loadPageChunk')
        .reply(200, NotionApiMocks.SUCCESSFUL_PAGE_CHUCK_WITH_CHILDREN);
      nock('https://www.notion.so')
        .post('/api/v3/getRecordValues')
        .reply(200, NotionApiMocks.SUCCESSFUL_RECORDS_WITH_CHILDREN);

      const notionPageId = '4d64bbc0-634d-4758-befa-85c5a3a6c22f';
      const apiInterface = makeSut(notionPageId);

      const response = await apiInterface.getNotionPageContents();

      expect(response).toEqual(NotionApiMocks.LIST_WITH_CHILDREN_RESPONSE);
    });

    describe('when children is not available on page chunk but it is available by request', () => {
      it('get out block from new request and passes in content', async () => {
        nock('https://www.notion.so')
          .post('/api/v3/loadPageChunk')
          .reply(200, NotionApiMocks.SUCCESSFUL_PAGE_CHUCK_WITH_CHILDREN_NOT_IN_CHUNK);
        nock('https://www.notion.so')
          .post('/api/v3/syncRecordValues')
          .reply(200, NotionApiMocks.SUCCESSFUL_SYNC_RECORD_VALUE);
        nock('https://www.notion.so')
          .post('/api/v3/getRecordValues')
          .reply(200, NotionApiMocks.SUCCESSFUL_RECORDS_WITH_CHILDREN);

        const notionPageId = '4d64bbc0-634d-4758-befa-85c5a3a6c22f';
        const apiInterface = makeSut(notionPageId);

        const response = await apiInterface.getNotionPageContents();

        expect(response).toEqual(NotionApiMocks.DETAILS_RESPONSE);
      });
    });
  });

  describe('when notion page id is missing', () => {
    it('throws MissingPageIdError', async () => {
      const response = () => makeSut('').getNotionPageContents();

      await expect(response).toThrow(new MissingPageIdError());
    });
  });

  describe('when notion page is not open for public reading', () => {
    it('throws NotionPageAccessError', async () => {
      nock('https://www.notion.so').post('/api/v3/getRecordValues').reply(200, NotionApiMocks.NO_PAGE_ACCESS_RECORDS);

      const notionPageId = 'b02b33d9-95cd-44cb-8e7f-01f1870c1ee8';
      const apiInterface = makeSut(notionPageId);

      const response = () => apiInterface.getNotionPageContents();

      await expect(response).rejects.toThrowError(new NotionPageAccessError(notionPageId));
    });
  });

  describe('when notion page is empty', () => {
    it('throws MissingContentError', async () => {
      nock('https://www.notion.so').post('/api/v3/getRecordValues').reply(200, NotionApiMocks.MISSING_CONTENT_RECORDS);

      const notionPageId = '9a75a541-277f-4a64-80e7-5581f36672ba';
      const apiInterface = makeSut(notionPageId);

      const response = () => apiInterface.getNotionPageContents();

      await expect(response).rejects.toThrow(new MissingContentError(notionPageId));
    });
  });
});
