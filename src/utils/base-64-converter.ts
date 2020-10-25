import { NodeFetchHttpGetClient } from './usecases/http-get/node-fetch-http-get';

export class Base64Converter {
  private readonly _imageSource: string;

  constructor(imageURL: string) {
    this._imageSource = imageURL;
  }

  static async convert(imageURL: string): Promise<string> {
    return Promise.resolve(new Base64Converter(imageURL)._convert());
  }

  async _convert(): Promise<string> {
    const response = await new NodeFetchHttpGetClient().get(this._imageSource);
    return Promise.resolve(response.data.toString());
  }
}
