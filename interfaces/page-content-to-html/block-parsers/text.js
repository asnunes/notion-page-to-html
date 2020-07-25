const DecoratedBlock = require('./decorated-block');

class TextBlockParser extends DecoratedBlock {
  parse() {
    return `<p>${this._innerHtml()}</p>`;
  }
}

module.exports = TextBlockParser;
