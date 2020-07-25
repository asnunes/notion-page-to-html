const Base = require('./base');

class Code extends Base {
  parse() {
    return `<code>${this._baseHtml}</code>`;
  }
}

module.exports = Code;
