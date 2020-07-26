const fetch = require('node-fetch');
const Errors = require('./errors');

class Base64Converter {
  constructor(imageURL) {
    this._imageSource = imageURL;
  }

  async convert() {
    const response = await this._fetchImage();
    const buffer = await response.buffer();
    const format = response.headers.raw()['content-type'];
    const b64 = buffer.toString('base64');

    return `data:${format};base64,${b64}`;
  }

  async _fetchImage() {
    const res = await fetch(this._imageSource, {
      method: 'GET',
    });

    if (res.status !== 200) throw new Errors.ImageNotFoundError(this._imageSource);
    return res;
  }
}

module.exports = Base64Converter;
