const Dispatcher = require('./dispatcher');
const ListWrapper = require('./list-wrapper');
class PageContentToHtmlInterface {
  constructor(contents) {
    this._contents = this._wrapLists(contents);
  }

  parse() {
    return this._contents.reduce((html, content) => {
      return html + this._dispatch(content).parse();
    }, '');
  }

  _wrapLists(contents) {
    return new ListWrapper(contents).wrapLists();
  }

  _dispatch(content) {
    return new Dispatcher(content).dispatch();
  }
}

module.exports = PageContentToHtmlInterface;
