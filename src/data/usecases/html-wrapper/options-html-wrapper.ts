import { PageProps } from 'data/protocols/page-props';
import { HtmlWrapper } from '../../../domain/usecases/html-wrapper';
import { HtmlOptions } from '../../protocols/html-options/html-options';

export class OptionsHtmlWrapper implements HtmlWrapper {
  private readonly _options: HtmlOptions;

  constructor(options: HtmlOptions) {
    this._options = options;
  }

  wrapHtml(pageProps: PageProps, html: string): string {
    if (this._options.bodyContentOnly) return html;
    const title = pageProps.title;

    return `\
    <!DOCTYPE html>
    <html>
      ${this._headFromTemplate(title)}
        <body>
          ${!this._options.excludeHeaderFromBody ? this._headerFromTemplate(pageProps) : ''}
          ${html}
          ${!this._options.excludeScripts ? this._scriptsFromTemplate() : ''}
        </body>
    </html>\
    `;
  }

  private _headFromTemplate(title: string): string {
    return `\
    <head>
      ${!this._options.excludeMetadata ? '<meta charset="utf-8">' : ''}
      ${!this._options.excludeMetadata ? '<meta name="viewport" content="width=device-width, initial-scale=1">' : ''}
      ${!this._options.excludeCSS ? this._styleTag : ''}
      ${!this._options.excludeTitleFromHead ? `<title>${title}</title>` : ''}
      ${
        !this._options.excludeScripts
          ? '<link href="https://unpkg.com/prismjs@1.22.0/themes/prism.css" rel="stylesheet">'
          : ''
      }
    </head>
    `;
  }

  private _scriptsFromTemplate(): string {
    return `\
      <script src="https://unpkg.com/prismjs@1.22.0/components/prism-core.min.js"></script>
      <script src="https://unpkg.com/prismjs@1.22.0/plugins/autoloader/prism-autoloader.min.js"></script>
      <script>
      MathJax = {
        tex: {
          inlineMath: [['$', '$']]
        }
      };
      </script>
      <script id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
      </script>\
    `;
  }

  private _headerFromTemplate(pageProps: PageProps): string {
    const { title, coverImageSrc, coverImagePosition } = pageProps;

    return `\
      <header>
        ${
          coverImageSrc
            ? `<img class="page-cover-image" src="${coverImageSrc}" style="object-position:center ${
                coverImagePosition || 0
              }%">`
            : ''
        }
        <h1 class="page-title">${title}</h1>
      </header>
    `;
  }

  private get _styleTag(): string {
    return `\
    <style>
      html {
        -webkit-print-color-adjust: exact;
      }
      * {
        box-sizing: border-box;
        -webkit-print-color-adjust: exact;
      }
    
      html,
      body {
        margin: 0;
        padding: 0;
        line-height: 1.5;
        white-space: pre-wrap;
        font-family: system-ui, sans-serif;
        color: #37352F;
      }
    
      @media only screen {
        body {
          margin: 2em auto;
          max-width: 900px;
          color: rgb(55, 53, 47);
        }
      }

      img {
        max-width: 100%;
        max-height: 70vh;
      }

      h1,
      h2,
      h3 {
        letter-spacing: -0.01em;
        line-height: 1.2;
        font-weight: 600;
        margin-bottom: 0;
      }

      .page-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 0.75em;
      }

      .page-cover-image {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 30vh;
      }    

      h1 {
        font-size: 1.875rem;
        margin-top: 1.875rem;
      }

      h2 {
        font-size: 1.5rem;
        margin-top: 1.5rem;
      }

      h3 {
        font-size: 1.25rem;
        margin-top: 1.25rem;
      }

      .callout {
        padding: 16px 16px 16px 12px;
        display: flex;
        width: 95%;
        border-radius: 3px;
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        align-items: center;
        justify-content: center;
      }

      .callout-emoji {
        height: 21.6px;
        width: 21.6px;
        font-size: 21.6px;
        line-height: 1.1;
        margin-left: 0px;
      }

      .callout p {
        max-width: 100%;
        width: 100%;
        white-space: pre-wrap;
        word-break: break-word;
        margin-left: 8px;
      }

      .indented {
        padding-left: 1.5em;
      }
    </style>
    `;
  }
}
