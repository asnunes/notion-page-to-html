const NotionApiInterface = require('./interfaces/notion-api');
const BlocksParser = require('./interfaces/blocks-to-tag');
const HtmlDocument = require('./interfaces/html-document');
const Errors = require('./errors');

class NotionPageToHtml {
  async parse(pageURL, includeFullDocument = true) {
    this._assertValidUrl(pageURL);
    const pageId = pageURL.split('-').reverse()[0];

    const contents = await new NotionApiInterface(pageId).getPageContent();
    const htmlBody = await new BlocksParser(contents).parse();

    if (!includeFullDocument) return htmlBody;
    return new HtmlDocument(contents[0].title, htmlBody).getHtmlDocument();
  }

  _assertValidUrl(pageURL) {
    if (!pageURL.includes('notion.so')) throw new Errors.InvalidPageUrl();
  }
}

module.exports = new NotionPageToHtml();
