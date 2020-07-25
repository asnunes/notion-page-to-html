const DecoratedBlock = require('../decorated-block');

class ListItemParser extends DecoratedBlock {
  parse() {
    return `<li>${this._innerHtml()}</li>`;
  }
}

module.exports = ListItemParser;
