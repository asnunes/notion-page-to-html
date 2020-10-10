describe('Name of the group', () => {
  it('should ', () => {
    expect(true).toBe(true);
  });
});

// import nock from 'nock';
// import NotionPageToHtml from '../../src';
// import * as NotionApiMocks from '../mocks/notion-api-responses';
// import * as HTML_RESPONSES from '../mocks/html';

// describe('#convert', () => {
//   describe('When should include full html document', () => {
//     const pageId = '4d64bbc0634d4758befa85c5a3a6c22f';

//     beforeEach(() => {
//       nock('https://www.notion.so')
//         .post('/api/v3/loadPageChunk', (body) => body.pageId.replace(/-/g, '') === pageId)
//         .reply(200, NotionApiMocks.SUCCESSFUL_PAGE_CHUCK);

//       nock('https://www.notion.so').post('/api/v3/getRecordValues').reply(200, NotionApiMocks.SUCCESSFUL_RECORDS);
//     });

//     it('it returns full html when full url is given', async () => {
//       const url = `https://www.notion.so/asnunes/Simple-Page-Text-${pageId}`;

//       const response = await NotionPageToHtml.parse(url);

//       expect(response).toEqual(HTML_RESPONSES.FULL_DOCUMENT);
//     });

//     it('it returns full html when short url is given', async () => {
//       const url = `https://www.notion.so/${pageId}`;

//       const response = await NotionPageToHtml.parse(url);

//       expect(response).toEqual(HTML_RESPONSES.FULL_DOCUMENT);
//     });
//   });

//   describe('When should not include full html document', () => {
//     it('it returns full html', async () => {
//       nock('https://www.notion.so').post('/api/v3/loadPageChunk').reply(200, NotionApiMocks.SUCCESSFUL_PAGE_CHUCK);

//       nock('https://www.notion.so').post('/api/v3/getRecordValues').reply(200, NotionApiMocks.SUCCESSFUL_RECORDS);

//       const response = await NotionPageToHtml.parse(
//         'https://www.notion.so/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f',
//         false,
//       );

//       expect(response).toEqual(HTML_RESPONSES.BODY_ONLY);
//     });
//   });

//   describe('When wrong link is given', () => {
//     it('throw invalid page url error', async () => {
//       nock('https://www.notion.so').post('/api/v3/loadPageChunk').reply(200, NotionApiMocks.SUCCESSFUL_PAGE_CHUCK);

//       nock('https://www.notion.so').post('/api/v3/getRecordValues').reply(200, NotionApiMocks.SUCCESSFUL_RECORDS);

//       const response = () =>
//         NotionPageToHtml.parse('https://www.example.com/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f');

//       await expect(response).rejects.toThrow(Errors.InvalidPageUrl);
//     });
//   });
// });
