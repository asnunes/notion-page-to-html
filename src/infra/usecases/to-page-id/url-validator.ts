import { Validation } from '../../protocols/validation';
import { InvalidPageUrlError } from '../../errors';

export class UrlValidor implements Validation {
  private readonly _url: string;

  constructor(url: string) {
    this._url = url;
  }

  validate(): Error | null {
    if (!this._isNotionPargeUrl()) return new InvalidPageUrlError(this._url);
    return null;
  }

  private _isNotionPargeUrl(): boolean {
    return /^http(s?):\/\/[\w\-]*\.notion.s(o|ite)\/((\w)+?\/)?(\w|-){32,}/g.test(this._url);
  }
}
