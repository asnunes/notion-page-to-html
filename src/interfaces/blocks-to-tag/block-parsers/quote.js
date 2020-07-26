const DecoratedBlock = require('./decorated-block');

class QuoteBlockParser extends DecoratedBlock {
  parse() {
    return `<blockquote>${this._innerHtml()}</blockquote>`;
  }
}

module.exports = QuoteBlockParser;
