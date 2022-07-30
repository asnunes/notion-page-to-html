import { NotionUrlToPageId } from '../../infra/use-cases/to-page-id';
import { IdNormalizer, UrlValidator } from '../../infra/use-cases/to-page-id/services';

export const createNotionUrlToPageId = (url: string): NotionUrlToPageId => {
  const idNormalizer = new IdNormalizer();
  const urlValidator = new UrlValidator();
  return new NotionUrlToPageId(url, idNormalizer, urlValidator);
};
