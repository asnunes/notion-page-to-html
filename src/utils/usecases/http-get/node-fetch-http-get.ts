import { HttpGetClient, HttpResponse } from '../../../data/protocols/http-request';
import fetch, { Response } from 'node-fetch';

export class NodeFetchHttpGetClient implements HttpGetClient {
  async get(url: string): Promise<HttpResponse> {
    const res = await fetch(url, {
      method: 'GET',
    });

    return {
      status: res.status,
      data: await this._getData(res),
      headers: res.headers.raw(),
    };
  }

  private async _getData(res: Response): Promise<Record<string, any> | string> {
    const format = res.headers.raw()['content-type'][0];

    if (format.includes('image')) {
      const buffer = await res.buffer();
      const b64 = buffer.toString('base64');
      return Promise.resolve(`data:${format};base64,${b64}`);
    }

    if (format.includes('json')) return res.json();

    return res.text();
  }
}
