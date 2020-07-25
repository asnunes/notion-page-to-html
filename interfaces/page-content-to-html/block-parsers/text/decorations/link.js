const Base = require('./base');

class Link extends Base {
  constructor(baseHtml, decorationArray) {
    super(baseHtml, decorationArray);
    this._link = decorationArray[1];
  }

  parse() {
    return `<a href="${this._link}" target="_blank">${this._baseHtml}</a>`;
  }
}

module.exports = Link;
