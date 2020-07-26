class YouTubeVideoBlockParser {
  constructor(block) {
    this._block = block;
  }

  parse() {
    if (!this._block.properties || !this._src || !this._src.includes('youtube.com')) return '';
    return `<iframe id="ytplayer" type="text/html" width="640" height="360" src="${this._src}" frameborder="0"/>`;
  }

  get _src() {
    return this._block.properties.source[0][0];
  }
}

module.exports = YouTubeVideoBlockParser;
