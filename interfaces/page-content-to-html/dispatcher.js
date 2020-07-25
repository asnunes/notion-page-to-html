const BlockParsers = require('./block-parsers');

class Dispatcher {
  constructor(content) {
    this._content = content;
  }

  dispatch() {
    switch (this._content.type) {
      case 'text':
        return new BlockParsers.Text(this._content);
      default:
        return new BlockParsers.Unknown(this._content);
    }
  }
}

module.exports = Dispatcher;
