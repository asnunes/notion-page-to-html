const Base64Converter = require('./base-64-converter');

class DividerParser {
  constructor(block) {
    this._block = block;
  }

  async parse() {
    if (!this._rawSrc) return '';

    const imageSource = await new Base64Converter(this._rawSrc).convert();
    return `<img src="${imageSource}" alt="${this._caption}" />`;
  }

  get _rawSrc() {
    const url =
      this._block.properties &&
      this._block.properties.source &&
      this._block.properties.source[0][0];
    if (!url) return;

    return `https://www.notion.so/image/${encodeURIComponent(url)}`;
  }

  get _caption() {
    return (
      (this._block.properties &&
        this._block.properties.caption &&
        this._block.properties.caption[0][0]) ||
      ''
    );
  }
}

module.exports = DividerParser;
