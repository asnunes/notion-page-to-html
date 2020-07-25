const Base = require('./base');

class Color extends Base {
  constructor(baseHtml, decorationArray) {
    super(baseHtml, decorationArray);
    this._identifier = decorationArray[1];
  }

  parse() {
    return `<span style="${this._style}">${this._baseHtml}</span>`;
  }

  _isBackground() {
    return this._identifier.includes('_background');
  }

  get _style() {
    if (this._isBackground()) return `background: ${this._color};`;
    return `color: ${this._color};`;
  }

  get _color() {
    return this._identifier.split('_')[0];
  }
}

module.exports = Color;
