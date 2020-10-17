import { PageProps } from '../../data/protocols/page-props';

export interface HtmlWrapper {
  wrapHtml(pageProps: PageProps, html: string): string;
}
