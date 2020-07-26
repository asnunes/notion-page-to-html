const Base = require('./base');

class Italic extends Base {
  parse() {
    return `<em>${this._baseHtml}</em>`;
  }
}

module.exports = Italic;
