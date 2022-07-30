import { ToHtml } from '../../../../domain/use-cases/to-html';

export class UnknownBlockToHtml implements ToHtml {
  async convert(): Promise<string> {
    return Promise.resolve('');
  }
}
