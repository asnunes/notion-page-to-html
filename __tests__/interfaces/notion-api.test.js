const NotionApiInterface = require('../../interfaces/notion-api');

const Errors = require('../../interfaces/notion-api/errors');

describe('#getPage', () => {
  describe('when notion page id is valid and page is public', () => {
    it('returns a javascript object with page content when page is valid', async () => {
      const notionPageId = '4d64bbc0634d4758befa85c5a3a6c22f';
      const apiInterface = new NotionApiInterface(notionPageId);

      const response = await apiInterface.getPage();

      // console.log(response);
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
      const notionPageId = 'b02b33d995cd44cb8e7f01f1870c1ee8';
      const apiInterface = new NotionApiInterface(notionPageId);

      const response = () => apiInterface.getPage();

      await expect(response).rejects.toThrow(Errors.NotionPageAccessError);
    });
  });

  describe('when notion page empty', () => {
    it('throws MissingContentError', async () => {
      const notionPageId = '9a75a541277f4a6480e75581f36672ba';
      const apiInterface = new NotionApiInterface(notionPageId);

      const response = () => apiInterface.getPage();

      await expect(response).rejects.toThrow(Errors.MissingContentError);
    });
  });
});
