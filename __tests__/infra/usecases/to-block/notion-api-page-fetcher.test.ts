import nock from 'nock';
import { NotionApiPageFetcher } from '../../../../src/infra/usecases/to-block/notion-api-page-fetcher';
import { NodeFetchHttpPostClient } from '../../../../src/infra/usecases/http-post/node-fetch-http-post-client';
import { IdNormalizer } from '../../../../src/infra/usecases/to-block/id-normalizer';
import { MissingContentError, MissingPageIdError, NotionPageAccessError } from '../../../../src/infra/errors';
import * as NotionApiMocks from '../../../mocks/notion-api';

describe('#getNotionPageContents', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  const makeSut = (notionPageId?: string): NotionApiPageFetcher => {
    const httpPostClient = new NodeFetchHttpPostClient();
    const idNormalizer = new IdNormalizer();
    return new NotionApiPageFetcher(notionPageId, httpPostClient, idNormalizer);
  };

  describe('when notion page id is valid and page is public', () => {
    it('returns NotionApiContentResponse object with page content when page is valid', async () => {
      nock('https://www.notion.so').post('/api/v3/loadPageChunk').reply(200, NotionApiMocks.SUCCESSFUL_PAGE_CHUCK);
      nock('https://www.notion.so').post('/api/v3/getRecordValues').reply(200, NotionApiMocks.SUCCESSFUL_RECORDS);
      const notionPageId = '4d64bbc0634d4758befa85c5a3a6c22f';
      const apiInterface = makeSut(notionPageId);

      const response = await apiInterface.getNotionPageContents();

      expect(response).toEqual([
        {
          id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
          type: 'text',
          title: 'Simple Page Test',
          properties: { title: [['Hello World']] },
        },
        {
          id: 'dcde43cb-7131-4687-8f22-c9789fa75f46',
          type: 'video',
          properties: { source: [['https://www.youtube.com/watch?v=xBFqxBfLJWc']] },
        },
      ]);
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
