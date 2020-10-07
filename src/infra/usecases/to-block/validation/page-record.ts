import { Validation } from './validation-protocol';

import { NotionPageAccessError, MissingContentError } from '../../../errors';
import { HttpResponse } from 'data/protocols/http-post';

export class PageRecordValidator implements Validation {
  private readonly _notionPageId: string;
  private readonly _pageRecord: HttpResponse;

  constructor(notionPageId: string, pageRecord: HttpResponse) {
    this._notionPageId = notionPageId;
    this._pageRecord = pageRecord;
  }

  validate(): Error | null {
    if (this._pageRecord.status === 401 || !this._pageRecord.data.results[0]?.value) {
      return new NotionPageAccessError(this._notionPageId);
    }

    if (!this._pageRecord.data.results[0]?.value?.content) {
      return new MissingContentError(this._notionPageId);
    }

    return null;
  }
}
