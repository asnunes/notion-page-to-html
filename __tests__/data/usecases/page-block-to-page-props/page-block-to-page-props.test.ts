import nock from 'nock';
import { resolve } from 'path';
import { PageBlockToPageProps } from '../../../../src/data/usecases/page-block-to-page-props';
import * as Blocks from '../../../mocks/blocks';
import base64Img from '../../../mocks/img/base64';

describe('#toPageProps', () => {
  describe('when page was title only', () => {
    it('returns page prop with title only and correct value', async () => {
      const pageBlockToPageProps = new PageBlockToPageProps(Blocks.PAGE_WITH_TITLE);

      const result = await pageBlockToPageProps.toPageProps();

      expect(result).toEqual({ title: 'Simple Page Title' });
    });
  });

  describe('when page was no title', () => {
    it('returns page prop with title setted as an empty string', async () => {
      const pageBlockToPageProps = new PageBlockToPageProps(Blocks.PAGE_WITHOUT_TITLE);

      const result = await pageBlockToPageProps.toPageProps();

      expect(result).toEqual({ title: '' });
    });
  });

  describe('when page has title and cover image', () => {
    describe('when image is from notion', () => {
      it('return base64 image in coverImageSrc prop', async () => {
        nock('https://www.notion.so')
          .get('/images/page-cover/solid_blue.png')
          .replyWithFile(200, resolve('__tests__/mocks/img/baseImage.jpeg'), {
            'content-type': 'image/jpeg',
          });
        const pageBlockToPageProps = new PageBlockToPageProps(Blocks.PAGE_WITH_TITLE_AND_COVER_IMAGE[0]);

        const result = await pageBlockToPageProps.toPageProps();

        expect(result).toEqual({ title: 'Page Title', coverImageSrc: base64Img });
      });
    });

    describe('when image is not from notion', () => {
      it('return base64 image in coverImageSrc prop', async () => {
        nock('https://www.example.com')
          .get('/some_image.png')
          .replyWithFile(200, resolve('__tests__/mocks/img/baseImage.jpeg'), {
            'content-type': 'image/jpeg',
          });

        const pageBlockToPageProps = new PageBlockToPageProps(
          Blocks.PAGE_WITH_TITLE_AND_COVER_IMAGE_NOT_FROM_NOTION[0],
        );

        const result = await pageBlockToPageProps.toPageProps();

        expect(result).toEqual({ title: 'Page Title', coverImageSrc: base64Img });
      });
    });

    describe('when image url is not valid', () => {
      it('return base64 image in coverImageSrc prop', async () => {
        const pageBlockToPageProps = new PageBlockToPageProps(Blocks.PAGE_WITH_TITLE_AND_INVALID_COVER_IMAGE[0]);

        const result = await pageBlockToPageProps.toPageProps();

        expect(result).toEqual({ title: 'Page Title' });
      });
    });
  });
});
