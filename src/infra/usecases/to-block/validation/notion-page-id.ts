import { Validation } from './validation-protocol';

import { MissingPageIdError } from '../../../errors';

export class NotionPageIdValidator implements Validation {
  private readonly _notionPageId: string | undefined;

  constructor(notionPageId: string | undefined) {
    this._notionPageId = notionPageId;
  }

  validate(): Error | null {
    if (!this._notionPageId || this._notionPageId == '') return new MissingPageIdError();
    return null;
  }
}
