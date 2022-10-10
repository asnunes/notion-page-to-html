import { Block } from '../../../../data/protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';
import { blockToInnerText } from '../../../helpers/block-to-inner-text';

export class CodeBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    const languageClass = this._language ? `class="language-${this._language}"` : '';

    return Promise.resolve(
      `<pre><code ${languageClass}>${blockToInnerText(this._block).replace(/\t/g, '  ')}</code></pre>`,
    );
  }

  private get _language(): string {
    return this._block.properties?.language?.toLowerCase().replace(/ /g, '');
  }
}
