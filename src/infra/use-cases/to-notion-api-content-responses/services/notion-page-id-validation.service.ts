import { Validation } from '../../../protocols/validation';
import { MissingPageIdError } from '../../../errors';

export class NotionPageIdValidator implements Validation<[string]> {
  validate(notionPageId: string): Error | null {
    if (!notionPageId || notionPageId == '') return new MissingPageIdError();
    return null;
  }
}
