class InvalidPageUrl extends Error {
  constructor() {
    super(`Given page is not a valid notion page.`);
  }
}

module.exports = InvalidPageUrl;
