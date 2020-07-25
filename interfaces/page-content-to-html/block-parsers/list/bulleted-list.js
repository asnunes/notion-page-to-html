const DecoratedBlock = require('../decorated-block');

class BulletedListBlockParser extends DecoratedBlock {
  parse() {
    return `<li>${this._innerHtml()}</li>`;
  }
}

module.exports = BulletedListBlockParser;
