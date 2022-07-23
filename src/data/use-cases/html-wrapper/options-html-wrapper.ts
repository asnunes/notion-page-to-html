import { PageProps } from 'data/protocols/page-props';
import { HtmlWrapper } from '../../../domain/use-cases/html-wrapper';
import { HtmlOptions } from '../../protocols/html-options/html-options';
import { HeaderFromTemplate } from './header-from-template';
import { SCRIPTS } from './scripts';
import { STYLE } from './styles';

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
${!this._options.excludeHeaderFromBody ? new HeaderFromTemplate(pageProps).toHeader() : ''}
${html}
${!this._options.excludeScripts ? SCRIPTS : ''}
</body>
</html>`;
  }

  private _headFromTemplate(title: string): string {
    return `\
<head>
${!this._options.excludeMetadata ? '<meta charset="utf-8">' : ''}
${!this._options.excludeMetadata ? '<meta name="viewport" content="width=device-width, initial-scale=1">' : ''}
${!this._options.excludeCSS ? STYLE : ''}
${!this._options.excludeTitleFromHead ? `<title>${title}</title>` : ''}
${
  !this._options.excludeScripts
    ? '<link href="https://unpkg.com/prismjs@1.22.0/themes/prism.css" rel="stylesheet">'
    : ''
}
</head>`;
  }
}
