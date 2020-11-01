import { HttpGetClient, HttpResponse } from '../../../data/protocols/http-request';

export class NodeFetchHttpGetClient implements HttpGetClient {
  async get(url: string): Promise<HttpResponse> {
    const res = await window.fetch(url, {
      method: 'GET',
    });

    return {
      status: res.status,
      data: await this._getData(res),
      headers: res.headers as Record<string, any>,
    };
  }

  private async _getData(res: any): Promise<Record<string, any> | string> {
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
