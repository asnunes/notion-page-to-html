import { Validation } from '../../../protocols/validation';

import { NotionPageAccessError, MissingContentError } from '../../../errors';
import { HttpResponse } from 'data/protocols/http-request';

export class PageRecordValidator implements Validation<[string, HttpResponse]> {
  validate(notionPageId: string, pageRecord: HttpResponse): Error | null {
    const data = pageRecord.data as Record<string, any>;

    if (pageRecord.status === 401 || !data.results?.[0]?.value) {
      return new NotionPageAccessError(notionPageId);
    }

    if (!data.results[0]?.value?.content) {
      return new MissingContentError(notionPageId);
    }

    return null;
  }
}
