const Base = require('./base');

class Equation extends Base {
  constructor(baseHtml, decorationArray) {
    super(baseHtml, decorationArray);
    this._equation = decorationArray[1];
  }

  parse() {
    return `$${this._equation}$`;
  }
}

module.exports = Equation;
