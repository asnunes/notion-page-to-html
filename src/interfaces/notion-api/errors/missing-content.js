class MissingContentError extends Error {
  constructor(pageId) {
    super(`Can not find content on page ${pageId}. Is it empty?`);
  }
}

module.exports = MissingContentError;
