const Dispatcher = require('./dispatcher');
const ListWrapper = require('./list-wrapper');
class PageContentToHtmlInterface {
  constructor(contents) {
    this._contents = this._wrapLists(contents);
  }

  async parse() {
    return this._contents.reduce(async (html, content) => {
      const parser = this._dispatch(content);
      const parsedHtml = await parser.parse();
      return (await html) + parsedHtml;
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
