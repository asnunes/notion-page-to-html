const ListItemParsers = {
  BulletedList: require('./bulleted-list'),
};

class List {
  constructor(block) {
    this._block = block;
  }

  parse() {
    switch (this._listType) {
      case 'bulleted_list':
        return `<ul>${this._itemsHtml(ListItemParsers.BulletedList)}</ul>`;
      default:
        return `<ul>${this._itemsHtml(ListItemParsers.BulletedList)}</ul>`;
    }
  }

  _itemsHtml(ItemParser) {
    return this._block.contents.map((c) => new ItemParser(c).parse()).join('\n');
  }

  get _listType() {
    return this._block.contents[0].type;
  }
}

module.exports = List;
