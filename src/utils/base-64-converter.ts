import { isBrowser } from 'browser-or-node';

export class Base64Converter {
  private readonly _imageSource: string;

  constructor(imageURL: string) {
    this._imageSource = imageURL;
  }

  static async convert(imageURL: string): Promise<string> {
    return Promise.resolve(new Base64Converter(imageURL)._convert());
  }

  async _convert(): Promise<string> {
    const Client = isBrowser
      ? (await import('./usecases/http-get/node-fetch-http-get')).NodeFetchHttpGetClient
      : (await import('./usecases/http-get/node-http-get')).NodeHttpGetClient;

    const response = await new Client().get(this._imageSource);
    return Promise.resolve(response.data.toString());
  }
}
