class ListWrapper {
  constructor(contents) {
    this._contents = contents;
  }

  wrapLists() {
    return this._contents.reduce((contents, c) => {
      if (!this._isList(c)) return [...contents, c];

      if (this._isList(c) && this._isFirstItemOfAList(contents, c))
        return [...contents, { type: 'list', contents: [c] }];

      const lastContent = contents[contents.length - 1];
      lastContent.contents.push(c);
      return contents;
    }, []);
  }

  _isList(currentContent) {
    return currentContent && currentContent.type.includes('list');
  }

  _isFirstItemOfAList(contents, currentContent) {
    const lastContent = contents[contents.length - 1];

    return (
      (!this._isList(lastContent) ||
        (lastContent && lastContent.contents[0].type !== currentContent.type)) &&
      this._isList(currentContent)
    );
  }
}

module.exports = ListWrapper;
