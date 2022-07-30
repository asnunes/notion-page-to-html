import { IdNormalizer, UrlValidator } from './services';

export class NotionUrlToPageId {
  constructor(
    private readonly url: string,
    private readonly idNormalizer: IdNormalizer,
    private readonly urlValidator: UrlValidator,
  ) {}

  toPageId(): string {
    const urlError = this.urlValidator.validate(this.url);
    if (urlError) throw urlError;

    return this.idNormalizer.normalizeId(this.ununormalizedPageId);
  }

  private get ununormalizedPageId(): string {
    const tail = this.url.split('/').reverse()[0];
    if (tail.split('-').length === 0) return tail;

    return tail.split('-').reverse()[0];
  }
}
