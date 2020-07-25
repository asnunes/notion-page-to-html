const Decorations = require('./decorations');

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
    if (blockContent.length === 1) return blockContent[0];

    return blockContent[1].reduce((decoratedHtml, decorationArray) => {
      const type = decorationArray[0];

      switch (type) {
        case 'b':
          return new Decorations.Bold(decoratedHtml, decorationArray).parse();
        case 'i':
          return new Decorations.Italic(decoratedHtml, decorationArray).parse();
        case 's':
          return new Decorations.StrikeThrough(decoratedHtml, decorationArray).parse();
        case 'c':
          return new Decorations.Code(decoratedHtml, decorationArray).parse();
        case '_':
          return new Decorations.Underline(decoratedHtml, decorationArray).parse();
        case 'e':
          return new Decorations.Equation(decoratedHtml, decorationArray).parse();
        case 'a':
          return new Decorations.Link(decoratedHtml, decorationArray).parse();
        case 'h':
          return new Decorations.Color(decoratedHtml, decorationArray).parse();
        default:
          return decoratedHtml;
      }
    }, blockContent[0]);
  }

  _replaceLineBreaksWithBrTags(blockContents) {
    return blockContents.map((bc) => bc.replace(/\n/g, '</br>'));
  }
}

module.exports = TextBlockParser;
