import { NotionPageAccessError, NotionPageNotFound } from '../../../../infra/errors';
import { Validation } from '../../../protocols/validation';

export class PageChunkValidator implements Validation<[string, number]> {
  validate(notionPageId: string, pageChunkStatus: number): Error | null {
    if ([401, 403].includes(pageChunkStatus)) {
      return new NotionPageAccessError(notionPageId);
    }

    if (pageChunkStatus === 404) {
      return new NotionPageNotFound(notionPageId);
    }

    return null;
  }
}
