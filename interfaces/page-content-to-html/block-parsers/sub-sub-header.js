const DecoratedBlock = require('./decorated-block');

class SubSubHeaderBlockParser extends DecoratedBlock {
  parse() {
    return `<h3>${this._innerHtml()}</h3>`;
  }
}

module.exports = SubSubHeaderBlockParser;
