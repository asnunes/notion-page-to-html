const Base = require('./base');

class Underline extends Base {
  parse() {
    return `<span style="text-decoration: underline;">${this._baseHtml}</span>`;
  }
}

module.exports = Underline;
