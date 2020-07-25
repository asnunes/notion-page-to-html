const ListItemParser = require('./list-item');
class List {
  constructor(block) {
    this._block = block;
  }

  parse() {
    switch (this._listType) {
      case 'bulleted_list':
        return `<ul>${this._itemsHtml()}</ul>`;
      case 'numbered_list':
        return `<ol>${this._itemsHtml()}</ol>`;
      default:
        return `<ul>${this._itemsHtml()}</ul>`;
    }
  }

  _itemsHtml() {
    return this._block.contents.map((c) => new ListItemParser(c).parse()).join('\n');
  }

  get _listType() {
    return this._block.contents[0].type;
  }
}

module.exports = List;
