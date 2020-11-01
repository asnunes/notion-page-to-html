import nock from 'nock';
import { NotionApiPageFetcher } from '../../../../src/infra/usecases/to-notion-api-content-responses/notion-api-page-fetcher';
import { NodeFetchHttpPostClient } from '../../../../src/infra/usecases/http-post/node-fetch-http-post-client';
import { NodeHttpPostClient } from '../../../../src/infra/usecases/http-post/node-http-post-client';
import { MissingContentError, MissingPageIdError, NotionPageAccessError } from '../../../../src/infra/errors';
import * as NotionApiMocks from '../../../mocks/notion-api-responses';

describe('#getNotionPageContents', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  const makeSut = (notionPageId?: string): NotionApiPageFetcher => {
    const httpPostClient = new NodeHttpPostClient();
    // const httpPostClient = new NodeFetchHttpPostClient();
    return new NotionApiPageFetcher(notionPageId, httpPostClient);
  };

  describe('when notion page id is valid and page is public', () => {
    it('returns NotionApiContentResponse object with page content when page is valid', async () => {
      nock('https://www.notion.so').post('/api/v3/loadPageChunk').reply(200, NotionApiMocks.SUCCESSFUL_PAGE_CHUCK);
      nock('https://www.notion.so').post('/api/v3/getRecordValues').reply(200, NotionApiMocks.SUCCESSFUL_RECORDS);
      const notionPageId = '4d64bbc0-634d-4758-befa-85c5a3a6c22f';
      const apiInterface = makeSut(notionPageId);

      const response = await apiInterface.getNotionPageContents();

      expect(response).toEqual(NotionApiMocks.TEXT_WITH_VIDEO_NOTION_API_CONTENT_RESPONSE);
    });

    it('passes its children', async () => {
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
  });

  describe('when notion page id is missing', () => {
    it('throws MissingPageIdError', async () => {
      const response = () => makeSut().getNotionPageContents();

      await expect(response).toThrow(new MissingPageIdError());
    });
  });

  describe('when notion page id not open for public reading', () => {
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
