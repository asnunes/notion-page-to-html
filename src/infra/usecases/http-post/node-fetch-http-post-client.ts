import { HttpPostClient, HttpResponse } from 'data/protocols/http-post';
import fetch from 'node-fetch';

export class NodeFetchHttpPostClient implements HttpPostClient {
  async post(url: string, body: Record<string, any>): Promise<HttpResponse> {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return {
      status: res.status,
      data: await res.json(),
    };
  }
}
