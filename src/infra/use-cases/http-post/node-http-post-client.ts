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

    let status = 504;

    const requestAsPromised: Promise<HttpResponse> = new Promise((resolve, reject) => {
      const req = https
        .request(options, (res) => {
          status = res.statusCode || 504;

          const chunks = new Array<Uint8Array>();

          res.on('data', (chunk) => {
            chunks.push(chunk);
          });

          res.on('end', () => {
            const result = Buffer.concat(chunks).toString('utf8');
            resolve({ status, data: JSON.parse(result) });
          });
        })
        .on('error', (err) => reject(err.message));

      req.write(stringifiedBody);
      req.end();
    });

    return requestAsPromised;
  }
}
