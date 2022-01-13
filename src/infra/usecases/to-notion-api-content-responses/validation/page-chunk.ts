import { NotionPageAccessError, NotionPageNotFound } from '../../../../infra/errors';
import { Validation } from '../../../protocols/validation';

export class PageChunkValidator implements Validation {
  private readonly _notionPageId: string;
  private readonly _pageChunkStatus: number;

  constructor(notionPageId: string, pageChunkStatus: number) {
    this._notionPageId = notionPageId;
    this._pageChunkStatus = pageChunkStatus;
  }

  validate(): Error | null {
    if ([401, 403].includes(this._pageChunkStatus)) {
      return new NotionPageAccessError(this._notionPageId);
    }

    if ([400, 404].includes(this._pageChunkStatus)) {
      return new NotionPageNotFound(this._notionPageId);
    }

    return null;
  }
}
