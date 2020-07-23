const fetcher = require('./fetcher');
const idNormalizer = require('./id-normalizer');

class NotionApiInterface {
  constructor(notionPageId) {
    this._notionPageId = this._normalizeId(notionPageId);
  }

  async getPage() {
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

  _fetch(action, body) {
    return fetcher(action, body);
  }

  _normalizeId(id) {
    return idNormalizer(id);
  }
}

module.exports = NotionApiInterface;
