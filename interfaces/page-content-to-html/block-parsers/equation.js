class EquationParser {
  constructor(block) {
    this._block = block;
  }

  parse() {
    if (!this._block.properties) return '';

    return `<div class="equation">$$${this._block.properties.title[0][0]}$$</div>`;
  }
}

module.exports = EquationParser;
