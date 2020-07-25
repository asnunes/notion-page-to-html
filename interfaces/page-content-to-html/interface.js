const Dispatcher = require('./dispatcher');

class PageContentToHtmlInterface {
  constructor(contents) {
    this._contents = contents;
  }

  parse() {
    return this._contents.reduce((html, content) => {
      return html + this._dispatch(content).parse();
    }, '');
  }

  _dispatch(content) {
    return new Dispatcher(content).dispatch();
  }
}

module.exports = PageContentToHtmlInterface;
