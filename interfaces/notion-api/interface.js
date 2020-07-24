const fetcher = require('./fetcher');
const idNormalizer = require('./id-normalizer');

const Errors = require('./errors');

class NotionApiInterface {
  constructor(notionPageId) {
    if (!notionPageId || notionPageId == '') throw new Errors.MissingPageIdError();

    this._notionPageId = this._normalizeId(notionPageId);
  }

  async getPage() {
    const pageRecords = await this._fetch('getRecordValues', {
      requests: [
        {
          id: this._notionPageId,
          table: 'block',
        },
      ],
    });

    this._assertPageAccessAndStructure(pageRecords);

    const overview = await this._fetch('getRecordValues', {
      requests: [
        {
          id: this._notionPageId,
          table: 'block',
        },
      ],
    });

    const chunk = await this._fetch('loadPageChunk', {
      pageId: this._notionPageId,
      limit: 999999, // Infinity?
      cursor: {
        stack: [],
      },
      chunkNumber: 0,
      verticalColumns: false,
    });

    return [JSON.stringify(chunk), JSON.stringify(overview)];
  }

  _assertPageAccessAndStructure(pageRecords) {
    if (!pageRecords.results[0].value) throw new Errors.NotionPageAccessError(this._notionPageId);
    if (!pageRecords.results[0].value.content)
      throw new Errors.MissingContentError(this._notionPageId);
  }

  _fetch(action, body) {
    return fetcher(action, body);
  }

  _normalizeId(id) {
    return idNormalizer(id);
  }
}

module.exports = NotionApiInterface;
