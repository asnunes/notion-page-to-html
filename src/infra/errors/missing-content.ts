export class MissingContentError extends Error {
  constructor(pageId: string) {
    super(`Can not find content on page ${pageId}. Is it empty?`);
    this.name = 'MissingContentError';
  }
}
