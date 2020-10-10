export class ImageNotFoundError extends Error {
  constructor(path: string) {
    super(`Image on path ${path} could not be found`);
    this.name = 'ImageNotFoundError';
  }
}
