import nock from 'nock';
import { resolve } from 'path';
import { PageBlockToPageProps } from './index';
import { Base64Converter } from '../../../utils/base-64-converter';
import * as Blocks from '../../../__tests__/mocks/blocks';
import base64Img from '../../../__tests__/mocks/img/base64';

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
      it('returns base64 image in coverImageSrc prop', async () => {
        nock('https://www.notion.so')
          .get('/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fsolid_blue.png')
          .query({
            table: 'block',
            id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
          })
          .replyWithFile(200, resolve('src/__tests__/mocks/img/baseImage.jpeg'), {
            'content-type': 'image/jpeg',
          });
        const pageBlockToPageProps = new PageBlockToPageProps(Blocks.PAGE_WITH_TITLE_AND_COVER_IMAGE[0]);

        const result = await pageBlockToPageProps.toPageProps();

        expect(result).toEqual({ title: 'Page Title', coverImageSrc: base64Img, coverImagePosition: 40 });
      });
    });

    describe('when image is not from notion', () => {
      it('returns base64 image in coverImageSrc prop', async () => {
        nock('https://www.notion.so')
          .get('/image/https%3A%2F%2Fwww.example.com%2Fsome_image.png')
          .query({
            table: 'block',
            id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
          })
          .replyWithFile(200, resolve('src/__tests__/mocks/img/baseImage.jpeg'), {
            'content-type': 'image/jpeg',
          });

        const pageBlockToPageProps = new PageBlockToPageProps(
          Blocks.PAGE_WITH_TITLE_AND_COVER_IMAGE_NOT_FROM_NOTION[0],
        );

        const result = await pageBlockToPageProps.toPageProps();

        expect(result).toEqual({ title: 'Page Title', coverImageSrc: base64Img, coverImagePosition: 40 });
      });
    });

    describe('when image url is not valid', () => {
      it('returns base64 image in coverImageSrc prop', async () => {
        const pageBlockToPageProps = new PageBlockToPageProps(Blocks.PAGE_WITH_TITLE_AND_INVALID_COVER_IMAGE[0]);

        const result = await pageBlockToPageProps.toPageProps();

        expect(result).toEqual({ title: 'Page Title' });
      });
    });
  });

  describe('when page has title and icon', () => {
    describe('when icon is an utf-8 emoji', () => {
      it('returns emoji in page prop', async () => {
        const pageBlockToPageProps = new PageBlockToPageProps(Blocks.PAGE_WITH_TITLE_AND_EMOJI_ICON[0]);

        const result = await pageBlockToPageProps.toPageProps();

        expect(result).toEqual({ title: 'Page Title', icon: '🤴' });
      });
    });

    describe('when icon is an image url', () => {
      const block = Blocks.PAGE_WITH_TITLE_AND_IMAGE_ICON[0];
      const imageSource = block.properties.page_icon;

      beforeEach(() => {
        nock('https://www.notion.so')
          .get(`/image/${encodeURIComponent(imageSource)}?table=block&id=${block.id}`)
          .replyWithFile(200, resolve('src/__tests__/mocks/img/baseImage.jpeg'), {
            'content-type': 'image/jpeg',
          });
      });

      it('returns image as base64 in page prop', async () => {
        const pageBlockToPageProps = new PageBlockToPageProps(block);

        const result = await pageBlockToPageProps.toPageProps();

        expect(result).toEqual({ title: 'Page Title', icon: base64Img });
      });

      it('attaches block id to image url on base64 convertion', async () => {
        const base64ConverterSpy = jest.spyOn(Base64Converter, 'convert');
        const pageBlockToPageProps = new PageBlockToPageProps(block);

        await pageBlockToPageProps.toPageProps();

        const expectedImageUrl = `https://www.notion.so/image/${encodeURIComponent(imageSource)}?table=block&id=${
          block.id
        }`;

        expect(base64ConverterSpy).toBeCalledWith(expectedImageUrl);
      });
    });
  });
});
