import { ToHtml } from '../../../../domain/usecases/to-html';

export class UnknownBlockToHtml implements ToHtml {
  async convert(): Promise<string> {
    return Promise.resolve('');
  }
}
