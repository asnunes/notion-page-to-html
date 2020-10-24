import { Block } from '../../protocols/blocks';
import { PageProps } from '../../protocols/page-props';
import { PageBlockToTitle } from './page-block-to-title';
import { PageBlockToCoverImageSource } from './page-block-to-cover-image-block';
import { PageBlockToIcon } from './page-block-to-icon';

export class PageBlockToPageProps {
  private readonly _pageBlock: Block;

  constructor(pageBlock: Block) {
    this._pageBlock = pageBlock;
  }

  async toPageProps(): Promise<PageProps> {
    const title = new PageBlockToTitle(this._pageBlock).toTitle();
    const coverImage = await new PageBlockToCoverImageSource(this._pageBlock).toImageCover();
    const icon = await new PageBlockToIcon(this._pageBlock).toIcon();

    return Promise.resolve({
      title,
      ...(coverImage && { coverImageSrc: coverImage.base64, coverImagePosition: coverImage.position }),
      ...(icon && { icon }),
    });
  }
}
