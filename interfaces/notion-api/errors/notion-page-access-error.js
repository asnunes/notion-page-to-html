class NotionPageAccessError extends Error {
  constructor(pageId) {
    super(`Can not read Notion Page of id ${pageId}. Is it open for public reading?`);
  }
}

module.exports = NotionPageAccessError;
