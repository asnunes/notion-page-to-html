const fetcher = require('./fetcher');
const idNormalizer = require('./id-normalizer');

const Errors = require('./errors');

class NotionApiInterface {
  constructor(notionPageId) {
    if (!notionPageId || notionPageId == '') throw new Errors.MissingPageIdError();

    this._notionPageId = this._normalizeId(notionPageId);
  }

  async getPageContent() {
    const pageRecords = await this._fetchRecordValues();

    await this._assertPageAccessAndStructure(pageRecords);

    const chunk = await this._fetchPageChunk();

    const contentIds = pageRecords.results[0].value.content;
    const contents = contentIds
      .filter((id) => !!chunk.recordMap.block[id])
      .map((id) => chunk.recordMap.block[id].value);

    return contents.map((c) => ({
      id: c.id,
      type: c.type,
      properties: c.properties,
    }));
  }

  _assertPageAccessAndStructure(pageRecords) {
    if (!pageRecords.results[0].value) throw new Errors.NotionPageAccessError(this._notionPageId);
    if (!pageRecords.results[0].value.content)
      throw new Errors.MissingContentError(this._notionPageId);
  }

  _fetchRecordValues() {
    return this._fetch('getRecordValues', {
      requests: [
        {
          id: this._notionPageId,
          table: 'block',
        },
      ],
    });
  }

  _fetchPageChunk() {
    return this._fetch('loadPageChunk', {
      pageId: this._notionPageId,
      limit: 999999,
      cursor: {
        stack: [],
      },
      chunkNumber: 0,
      verticalColumns: false,
    });
  }

  _fetch(action, body) {
    return fetcher(action, body);
  }

  _normalizeId(id) {
    return idNormalizer(id);
  }
}

module.exports = NotionApiInterface;
