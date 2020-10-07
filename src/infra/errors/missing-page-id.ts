export class MissingPageIdError extends Error {
  constructor() {
    super('PageId is Missing');
    this.name = 'MissingPageIdError';
  }
}
