import { NotionUrlToPageId } from './index';
import { InvalidPageUrlError } from '../../errors';
import { UrlValidator, IdNormalizer } from './services';

describe('#toPageId', () => {
  const makeSut = (url: string): NotionUrlToPageId => {
    const idNormalizer = new IdNormalizer();
    const urlValidator = new UrlValidator();
    return new NotionUrlToPageId(url, idNormalizer, urlValidator);
  };

  describe('when invalid url is given', () => {
    describe('when it is from another domain', () => {
      it('throws InvalidPageUrlError', () => {
        const url = 'https://example.com/notion_page_id';

        const result = () => makeSut(url).toPageId();

        expect(result).toThrow(new InvalidPageUrlError(url));
      });
    });

    describe('when it is from the same domain, but not a page path', () => {
      it('throws InvalidPageUrlError', () => {
        const url = 'https://www.notion.so/onboarding';

        const result = () => makeSut(url).toPageId();

        expect(result).toThrow(new InvalidPageUrlError(url));
      });
    });
  });

  describe('when valid url is given', () => {
    describe('when it has full page url with unnormalized page id', () => {
      it('returns normalized page id', () => {
        const url = 'https://www.notion.so/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f';

        const result = makeSut(url).toPageId();

        expect(result).toBe('4d64bbc0-634d-4758-befa-85c5a3a6c22f');
      });
    });
  });
});
