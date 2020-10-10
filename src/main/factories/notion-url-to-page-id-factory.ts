import { NotionUrlToPageId } from '../../infra/usecases/to-page-id';
import { IdNormalizer } from '../../infra/usecases/to-page-id/id-normalizer';

export const makeNotionUrlToPageIdFactory = (url: string): NotionUrlToPageId => {
  const idNormalizer = new IdNormalizer();
  return new NotionUrlToPageId(url, idNormalizer);
};
