const DecoratedBlock = require('./decorated-block');

class SubHeaderBlockParser extends DecoratedBlock {
  parse() {
    return `<h2>${this._innerHtml()}</h2>`;
  }
}

module.exports = SubHeaderBlockParser;
