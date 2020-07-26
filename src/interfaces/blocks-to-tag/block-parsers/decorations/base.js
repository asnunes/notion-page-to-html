const Errors = require('../errors');

class Base {
  constructor(baseHtml, decorationArray) {
    this._baseHtml = baseHtml;
    this._type = decorationArray[0];
  }

  parse() {
    return new Errors.ParseMethodIsNotImplemented(this.constructor.name);
  }
}

module.exports = Base;
