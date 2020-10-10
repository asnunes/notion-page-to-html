import { HtmlWrapper } from 'domain/usecases/html-wrapper';
import { HtmlOptions } from '../../protocols/html-options/html-options';

export class OptionsHtmlWrapper implements HtmlWrapper {
  private readonly _options: HtmlOptions;

  constructor(options: HtmlOptions) {
    this._options = options;
  }

  wrapHtml(title: string, html: string): string {
    if (this._options.bodyContentOnly) return html;

    return `
    <!DOCTYPE html>
    <html>
      ${this.headFromTemplate(title)}
        <body>
          ${html}
          ${!this._options.excludeScripts ? this.scriptsFromTemplate() : ''}
        </body>
    </html>
    `;
  }

  private headFromTemplate(title: string): string {
    return `
    <head>
      ${!this._options.excludeMetadata ? '<meta charset="utf-8">' : ''}
      ${!this._options.excludeMetadata ? '<meta name="viewport" content="width=device-width, initial-scale=1">' : ''}
      ${!this._options.excludeCSS ? this._styleTag : ''}
      ${!this._options.excludeTitle ? `<title>${title}</title>` : ''}
      ${
        !this._options.excludeScripts
          ? '<link href="https://myCDN.com/prism@v1.x/themes/prism.css" rel="stylesheet">'
          : ''
      }
    </head>
    `;
  }

  private scriptsFromTemplate(): string {
    return `
      <script src="https://myCDN.com/prism@v1.x/components/prism-core.min.js"></script>
      <script src="https://myCDN.com/prism@v1.x/plugins/autoloader/prism-autoloader.min.js"></script>
      <script>
      MathJax = {
        tex: {
          inlineMath: [['$', '$']]
        }
      };
      </script>
      <script id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
      </script>
    `;
  }

  private get _styleTag(): string {
    return `
    <style>
      body {
        font-family: system-ui, sans-serif;
      }

      img {
        max-width: 100%;
        max-height: 70vh;
      }
    </style>
    `;
  }
}
