const Base = require('./base');

class Bold extends Base {
  parse() {
    return `<strong>${this._baseHtml}</strong>`;
  }
}

module.exports = Bold;
