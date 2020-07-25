const Decorations = {
  Bold: require('./bold'),
  Italic: require('./italic'),
  StrikeThrough: require('./strikethrough'),
  Code: require('./code'),
  Underline: require('./underline'),
  Equation: require('./equation'),
  Link: require('./link'),
  Color: require('./color'),
};

class Decorator {
  constructor(blockContent) {
    this._blockContent = blockContent;
  }

  decorate() {
    if (this._blockContent.length === 1) return this._blockContent[0];

    return this._blockContent[1].reduce((decoratedHtml, decorationArray) => {
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
    }, this._blockContent[0]);
  }
}

module.exports = Decorator;
