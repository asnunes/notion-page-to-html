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
      case 'to_do':
        return new BlockParsers.ToDo(this._content);
      case 'code':
        return new BlockParsers.Code(this._content);
      case 'quote':
        return new BlockParsers.Quote(this._content);
      case 'divider':
        return new BlockParsers.Divider(this._content);
      case 'list':
        return new BlockParsers.List(this._content);
      default:
        return new BlockParsers.Unknown(this._content);
    }
  }
}

module.exports = Dispatcher;
