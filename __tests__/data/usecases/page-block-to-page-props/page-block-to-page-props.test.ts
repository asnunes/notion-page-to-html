import { PageBlockToPageProps } from '../../../../src/data/usecases/page-block-to-page-props';
import * as Blocks from '../../../mocks/blocks';

describe('#toPageProps', () => {
  describe('when page was title only', () => {
    it('returns page prop with title only and correct value', () => {
      const pageBlockToPageProps = new PageBlockToPageProps(Blocks.PAGE_WITH_TITLE);

      const result = pageBlockToPageProps.toPageProps();

      expect(result).toEqual({ title: 'Simple Page Title' });
    });
  });

  describe('when page was no title', () => {
    it('returns page prop with title setted as an empty string', () => {
      const pageBlockToPageProps = new PageBlockToPageProps(Blocks.PAGE_WITHOUT_TITLE);

      const result = pageBlockToPageProps.toPageProps();

      expect(result).toEqual({ title: '' });
    });
  });
});
