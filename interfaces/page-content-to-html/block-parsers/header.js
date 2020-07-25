const DecoratedBlock = require('./decorated-block');

class HeaderBlockParser extends DecoratedBlock {
  parse() {
    return `<h1>${this._innerHtml()}</h1>`;
  }
}

module.exports = HeaderBlockParser;
