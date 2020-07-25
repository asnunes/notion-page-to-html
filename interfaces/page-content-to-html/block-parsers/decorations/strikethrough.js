const Base = require('./base');

class StrikeThrough extends Base {
  parse() {
    return `<del>${this._baseHtml}</del>`;
  }
}

module.exports = StrikeThrough;
