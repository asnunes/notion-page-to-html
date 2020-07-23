const NotionApiInterface = require('../../interfaces/notion-api');

describe('#getPage', () => {
  describe('when notion page id is valid and page is public', () => {
    it('returns a javascript object with page content when page is valid', async () => {
      const notionPageId = '4d64bbc0634d4758befa85c5a3a6c22f';
      const ApiInterface = new NotionApiInterface(notionPageId);

      const response = await ApiInterface.getPage();

      console.log(response);
      expect(response).not.toBe(null);
    });
  });
});
