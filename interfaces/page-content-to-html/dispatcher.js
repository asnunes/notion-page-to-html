const BlockParsers = require('./block-parsers');

class Dispatcher {
  constructor(content) {
    this._content = content;
  }

  dispatch() {
    switch (this._content.type) {
      case 'text':
        return new BlockParsers.Text(this._content);
      case 'header':
        return new BlockParsers.Header(this._content);
      case 'sub_header':
        return new BlockParsers.SubHeader(this._content);
      case 'sub_sub_header':
        return new BlockParsers.SubSubHeader(this._content);
      default:
        return new BlockParsers.Unknown(this._content);
    }
  }
}

module.exports = Dispatcher;
