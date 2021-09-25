import { Block } from '../../protocols/blocks';
import { Base64Converter } from '../../../utils/base-64-converter';
import { ImageCover } from '../../protocols/page-props';

export class PageBlockToCoverImageSource {
  private readonly _pageBlock: Block;

  constructor(pageBlock: Block) {
    this._pageBlock = pageBlock;
  }

  async toImageCover(): Promise<ImageCover | null> {
    const pageCover = this._pageBlock.properties.page_cover;
    if (!pageCover || !this._isImageURL(pageCover)) return Promise.resolve(null);

    let head = '';
    if (pageCover.startsWith('/')) head = 'https://www.notion.so';

    const base64 = await Base64Converter.convert(this.getImageAuthenticatedSrc(head + pageCover));
    const position = this._pageCoverPositionToPositionCenter(this._pageBlock.format.page_cover_position || 0.6);

    return { base64, position };
  }

  private _isImageURL(url: string): boolean {
    return /(?:([^:\/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpg|gif|png|jpeg))(?:\?([^#]*))?(?:#(.*))?/gi.test(url);
  }

  private getImageAuthenticatedSrc(src: string): string {
    return `https://www.notion.so/image/${encodeURIComponent(src)}?table=block&id=${this._pageBlock.id}`;
  }

  private _pageCoverPositionToPositionCenter(coverPosition: number): number {
    return (1 - coverPosition) * 100;
  }
}
