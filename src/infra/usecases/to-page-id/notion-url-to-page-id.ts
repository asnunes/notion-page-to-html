import { InvalidPageUrlError } from '../../errors';

export class NotionUrlToPageId {
  private _url: string;

  constructor(url: string) {
    this._url = url;
  }

  toPageId(): string {
    throw new InvalidPageUrlError(this._url);
  }
}
