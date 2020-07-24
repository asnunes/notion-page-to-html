const nock = require('nock');
const NotionApiInterface = require('../../interfaces/notion-api');
const Errors = require('../../interfaces/notion-api/errors');
const NotionApiMocks = require('../mocks/notion-api');

describe('#getPage', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('when notion page id is valid and page is public', () => {
    it('returns a javascript object with page content when page is valid', async () => {
      nock('https://www.notion.so')
        .post('/api/v3/loadPageChunk')
        .reply(200, NotionApiMocks.SUCCESSFUL_PAGE_CHUCK);

      nock('https://www.notion.so')
        .post('/api/v3/getRecordValues')
        .reply(200, NotionApiMocks.SUCCESSFUL_RECORDS);

      const notionPageId = '4d64bbc0634d4758befa85c5a3a6c22f';
      const apiInterface = new NotionApiInterface(notionPageId);

      const response = await apiInterface.getPage();

      expect(response).not.toBe(null);
    });
  });

  describe('when notion page id is missing', () => {
    it('throws MissingPageIdError', async () => {
      const response = () => new NotionApiInterface().getPage();

      await expect(response).toThrow(Errors.MissingPageIdError);
    });
  });

  describe('when notion page id not open for public reading', () => {
    it('throws NotionPageAccessError', async () => {
      nock('https://www.notion.so')
        .post('/api/v3/getRecordValues')
        .reply(200, NotionApiMocks.NO_PAGE_ACCESS_RECORDS);

      const notionPageId = 'b02b33d995cd44cb8e7f01f1870c1ee8';
      const apiInterface = new NotionApiInterface(notionPageId);

      const response = () => apiInterface.getPage();

      await expect(response).rejects.toThrow(Errors.NotionPageAccessError);
    });
  });

  describe('when notion page empty', () => {
    it('throws MissingContentError', async () => {
      nock('https://www.notion.so')
        .post('/api/v3/getRecordValues')
        .reply(200, NotionApiMocks.MISSING_CONTENT_RECORDS);

      const notionPageId = '9a75a541277f4a6480e75581f36672ba';
      const apiInterface = new NotionApiInterface(notionPageId);

      const response = () => apiInterface.getPage();

      await expect(response).rejects.toThrow(Errors.MissingContentError);
    });
  });
});
