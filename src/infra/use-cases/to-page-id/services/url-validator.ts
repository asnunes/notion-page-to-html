import { Validation } from '../../../protocols/validation';
import { InvalidPageUrlError } from '../../../errors';

export class UrlValidator implements Validation<[string]> {
  validate(url: string): Error | null {
    if (!this.isNotionPargeUrl(url)) return new InvalidPageUrlError(url);
    return null;
  }

  private isNotionPargeUrl(url: string): boolean {
    return /^http(s?):\/\/((w{3}.)?notion.so|[\w\-]*\.notion\.site)\/((\w)+?\/)?(\w|-){32,}/g.test(url);
  }
}
