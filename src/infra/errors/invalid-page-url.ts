export class InvalidPageUrlError extends Error {
  constructor(url: string) {
    super(`Url "${url}" is not a valid notion page.`);
    this.name = 'InvalidPageUrlError';
  }
}
