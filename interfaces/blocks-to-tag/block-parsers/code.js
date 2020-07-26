class CodeParser {
  constructor(block) {
    this._block = block;
  }

  parse() {
    return `<pre><code class="language-${this._language}">${this._innerHtml()}</code></pre>`;
  }

  _innerHtml() {
    const blockContents = this._block.properties && this._block.properties.title;
    if (!blockContents) return '';

    return blockContents.map((bc) => bc[0]).join('');
  }

  get _language() {
    return (
      this._block.properties &&
      this._block.properties.language &&
      this._block.properties.language[0][0].toLowerCase().replace(/ /g, '')
    );
  }
}

module.exports = CodeParser;
