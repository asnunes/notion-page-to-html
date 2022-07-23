import { Block } from '../../../protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';

export class YouTubeVideoBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    const id = this._youtubeId;
    if (!id) return '';
    return `<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/${id}"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>`;
  }

  private get _youtubeId(): string | void {
    const youtubeIdMatcher =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;
    return youtubeIdMatcher.exec(this._src)?.[1];
  }

  private get _src() {
    return this._block.properties?.source;
  }
}
