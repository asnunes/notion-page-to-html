import { Block } from 'data/protocols/blocks';
import { ToHtml } from 'domain/usecases/to-html';

export class YouTubeVideoBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    if (!this._block.properties || !this._src || !this._src.includes('youtube.com')) return '';
    return `<iframe id="ytplayer" type="text/html" width="640" height="360" src="${this._src}" frameborder="0"/>`;
  }

  private get _src() {
    return this._block.properties.source;
  }
}
