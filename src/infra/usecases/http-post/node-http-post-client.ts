import { HttpPostClient, HttpResponse } from '../../../data/protocols/http-request';
import https, { RequestOptions } from 'https';
import { URL } from 'url';

export class NodeHttpPostClient implements HttpPostClient {
  async post(url: string, body: Record<string, any>): Promise<HttpResponse> {
    const urlHandler = new URL(url);
    const stringifiedBody = JSON.stringify(body);

    const options: RequestOptions = {
      hostname: urlHandler.hostname,
      path: urlHandler.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': stringifiedBody.length,
      },
    };

    let data = '';
    let status = 504;

    const requestAsPromised: Promise<HttpResponse> = new Promise((resolve, reject) => {
      const req = https
        .request(options, (res) => {
          status = res.statusCode || 504;

          res.on('data', (chunk) => {
            data += chunk;
          });

          res.on('end', () => resolve({ status, data: JSON.parse(data) }));
        })
        .on('error', (err) => reject(err.message));

      req.write(stringifiedBody);
      req.end();
    });

    return requestAsPromised;
  }
}
