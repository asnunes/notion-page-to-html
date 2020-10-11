import { UrlValidor } from './url-validator';
import { IdNormalizer } from '../to-page-id/id-normalizer';

export class NotionUrlToPageId {
  private _url: string;
  private readonly _idNormalizer: IdNormalizer;

  constructor(url: string, idNormalizer: IdNormalizer) {
    this._url = url;
    this._idNormalizer = idNormalizer;
  }

  toPageId(): string {
    const urlError = new UrlValidor(this._url).validate();
    if (urlError) throw urlError;

    return this._idNormalizer.normalizeId(this._ununormalizedPageId);
  }

  private get _ununormalizedPageId(): string {
    const tail = this._url.split('/').reverse()[0];
    if (tail.split('-').length === 0) return tail;
    return tail.split('-').reverse()[0];
  }
}
