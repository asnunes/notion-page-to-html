export interface ToHtml {
  convert(): Promise<string>;
}

export interface ToHtmlClass {
  new (...args: any): ToHtml;
}
