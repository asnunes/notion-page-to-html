import { NotionUrlToPageId } from '../../../../src/infra/usecases/to-page-id';
import { InvalidPageUrlError } from '../../../../src/infra/errors/';

describe('#toPageId', () => {
  describe('when invalid url is given', () => {
    it('throws InvalidPageUrlError', () => {
      const url = 'https://example.com/notion_page_id';

      const result = () => new NotionUrlToPageId(url).toPageId();

      expect(result).toThrow(new InvalidPageUrlError(url));
    });
  });
});
