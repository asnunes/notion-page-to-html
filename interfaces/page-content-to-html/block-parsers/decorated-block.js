const Decorator = require('./decorations');
const Errors = require('./errors');

class DecoratedBlock {
  constructor(block) {
    this._block = block;
  }

  parse() {
    return new Errors.ParseMethodIsNotImplemented(this.constructor.name);
  }

  _innerHtml() {
    const blockContents = this._block.properties && this._block.properties.title;
    if (!blockContents) return '';

    const decoratedContents = blockContents.map((bc) => this._parseDecoration(bc));

    return this._replaceLineBreaksWithBrTags(decoratedContents).join('');
  }

  _parseDecoration(blockContent) {
    return new Decorator(blockContent).decorate();
  }

  _replaceLineBreaksWithBrTags(blockContents) {
    return blockContents.map((bc) => bc.replace(/\n/g, '</br>'));
  }
}

module.exports = DecoratedBlock;
