class ImageNotFoundError extends Error {
  constructor(path) {
    super(`Image on path ${path} could not be found`);
  }
}

module.exports = ImageNotFoundError;
