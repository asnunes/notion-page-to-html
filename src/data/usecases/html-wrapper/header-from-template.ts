import { PageProps } from '../../protocols/page-props/page-props';

export class HeaderFromTemplate {
  private readonly _pageProps: PageProps;

  constructor(pageProps: PageProps) {
    this._pageProps = pageProps;
  }

  toHeader(): string {
    return `\
      <header>
        ${this._coverImageHtml}
        ${this._titleHtml}
      </header>\
    `;
  }

  private get _coverImageHtml(): string {
    const { coverImageSrc, coverImagePosition } = this._pageProps;

    return coverImageSrc
      ? `<img class="page-cover-image" src="${coverImageSrc}" style="object-position:center ${
          coverImagePosition || 0
        }%">`
      : '';
  }

  private get _iconHtml(): string {
    const { coverImageSrc, icon } = this._pageProps;
    if (!icon) return '';

    return `<div class="page-header-icon ${
      coverImageSrc ? 'page-header-icon-with-cover' : ''
    }"><img class="icon" src="${icon}"></div>`;
  }

  private get _titleHtml(): string {
    const { title } = this._pageProps;

    return `<h1 class="page-title">${title}</h1>`;
  }
}
