const Decorator = require('./decorations');

class TextBlockParser {
  constructor(block) {
    this._block = block;
  }

  parse() {
    return `<p>${this._innerHtml()}</p>`;
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

module.exports = TextBlockParser;
