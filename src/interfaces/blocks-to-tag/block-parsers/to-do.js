const DecoratedBlock = require('./decorated-block');

class ToDoParser extends DecoratedBlock {
  parse() {
    return `<div>
        <input type="checkbox"${this._isChecked() ? ' checked' : ''} name="${this._block.id}">
        <label for="${this._block.id}">${this._block.properties.title}</label>
      </div>`;
  }

  _isChecked() {
    return !!this._block.properties.checked;
  }
}

module.exports = ToDoParser;
