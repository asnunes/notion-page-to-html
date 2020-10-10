import fetch, { Response } from 'node-fetch';
import { ImageNotFoundError } from '../../../../errors';

export class Base64Converter {
  private _imageSource: string;

  constructor(imageURL: string) {
    this._imageSource = imageURL;
  }

  static async convert(imageURL: string): Promise<string> {
    return Promise.resolve(new Base64Converter(imageURL)._convert());
  }

  async _convert(): Promise<string> {
    const response = await this._fetchImage();
    const buffer = await response.buffer();
    const format = response.headers.raw()['content-type'];
    const b64 = buffer.toString('base64');

    return Promise.resolve(`data:${format};base64,${b64}`);
  }

  async _fetchImage(): Promise<Response> {
    const res = await fetch(this._imageSource, {
      method: 'GET',
    });

    if (res.status !== 200) throw new ImageNotFoundError(this._imageSource);
    return Promise.resolve(res);
  }
}
