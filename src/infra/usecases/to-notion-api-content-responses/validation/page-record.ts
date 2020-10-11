import { Validation } from '../../../protocols/validation';

import { NotionPageAccessError, MissingContentError } from '../../../errors';
import { HttpResponse } from 'data/protocols/http-request';

export class PageRecordValidator implements Validation {
  private readonly _notionPageId: string;
  private readonly _pageRecord: HttpResponse;

  constructor(notionPageId: string, pageRecord: HttpResponse) {
    this._notionPageId = notionPageId;
    this._pageRecord = pageRecord;
  }

  validate(): Error | null {
    const data = this._pageRecord.data as Record<string, any>;

    if (this._pageRecord.status === 401 || !data.results[0]?.value) {
      return new NotionPageAccessError(this._notionPageId);
    }

    if (!data.results[0]?.value?.content) {
      return new MissingContentError(this._notionPageId);
    }

    return null;
  }
}
