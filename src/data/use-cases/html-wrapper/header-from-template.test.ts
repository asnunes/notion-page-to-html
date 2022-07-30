import { HeaderFromTemplate } from './header-from-template';
import * as html from '../../../__tests__/mocks/html';

describe('#toHeader', () => {
  describe('when page has title only', () => {
    it('returns html with header and h1', () => {
      const pageProps = { title: 'This is a title' };

      const result = new HeaderFromTemplate(pageProps).toHeader();

      expect(result.replace(/\s/g, '')).toEqual(html.HEADER_WITH_TITLE_ONLY.replace(/\s/g, ''));
    });
  });

  describe('when page has title and cover', () => {
    describe('when coverImagePosition is given on pageProp', () => {
      it('returns html with header and h1 and image position on image style', () => {
        const pageProps = {
          title: 'This is a title',
          coverImageSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD',
          coverImagePosition: 15,
        };

        const result = new HeaderFromTemplate(pageProps).toHeader();

        expect(result.replace(/\s/g, '')).toEqual(html.HEADER_WITH_TITLE_AND_COVER_IMAGE.replace(/\s/g, ''));
      });
    });

    describe('when coverImagePosition is not given on pageProp', () => {
      it('returns html with header and h1 and image position as 0% on image style', () => {
        const pageProps = {
          title: 'This is a title',
          coverImageSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD',
        };

        const result = new HeaderFromTemplate(pageProps).toHeader();

        expect(result.replace(/\s/g, '')).toEqual(
          html.HEADER_WITH_TITLE_AND_COVER_IMAGE_WITHOUT_POSITION.replace(/\s/g, ''),
        );
      });
    });
  });

  describe('when page has title cover and icon', () => {
    describe('when icon is an image', () => {
      it('returns html with header with h1, image cover and image icon with page-header-icon-with-cover class', () => {
        const pageProps = {
          title: 'This is a title',
          coverImageSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD',
          icon: 'data:image/jpeg;base64,/4QDeRXhpZgAASUkqAAgAAAAGABIBAwA',
        };

        const result = new HeaderFromTemplate(pageProps).toHeader();

        expect(result.replace(/\s/g, '')).toEqual(html.HEADER_WITH_TITLE_COVER_IMAGE_AND_IMAGE_ICON.replace(/\s/g, ''));
      });
    });
  });

  describe('when page has title and icon', () => {
    describe('when icon is an image', () => {
      it('returns html with header with h1 and image icon', () => {
        const pageProps = {
          title: 'This is a title',
          icon: 'data:image/jpeg;base64,/4QDeRXhpZgAASUkqAAgAAAAGABIBAwA',
        };

        const result = new HeaderFromTemplate(pageProps).toHeader();

        expect(result.replace(/\s/g, '')).toEqual(html.HEADER_WITH_TITLE_AND_IMAGE_ICON.replace(/\s/g, ''));
      });
    });

    describe('when icon is an emoji', () => {
      it('retruns html with header with h1 and emoji in a div', () => {
        const pageProps = {
          title: 'This is a title',
          icon: '🤴',
        };

        const result = new HeaderFromTemplate(pageProps).toHeader();

        expect(result.replace(/\s/g, '')).toEqual(html.HEADER_WITH_TITLE_AND_EMOJI_ICON.replace(/\s/g, ''));
      });
    });
  });
});
