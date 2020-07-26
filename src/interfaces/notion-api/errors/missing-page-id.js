class MissingPageIdError extends Error {
  constructor() {
    super('PageId is Missing');
  }
}

module.exports = MissingPageIdError;
