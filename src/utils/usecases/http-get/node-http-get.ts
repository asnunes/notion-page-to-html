import { HttpGetClient, HttpResponse } from '../../../data/protocols/http-request';
import https from 'https';

export class NodeHttpGetClient implements HttpGetClient {
  async get(url: string): Promise<HttpResponse> {
    const requestAsPromised: Promise<HttpResponse> = new Promise((resolve, reject) => {
      let stringData = '';
      https
        .get(url, (res) => {
          res.setEncoding('base64');

          res.on('data', (chunk) => {
            stringData += chunk;
          });

          res.on('end', () => {
            const format = res.headers['content-type'] || 'image/jpeg';

            if (res.statusCode === 403) {
              console.log('There was a 403 error with the image: ' + url);
              return resolve({
                status: 200,
                data: url,
              });
            }

            if (format.includes('image')) {
              return resolve({
                status: res.statusCode || 200,
                headers: res.headers as Record<string, any>,
                data: `data:${format};base64,${stringData}`,
              });
            }

            return resolve({
              status: res.statusCode || 200,
              headers: res.headers as Record<string, any>,
              data: JSON.parse(stringData),
            });
          });
        })
        .on('error', (err) => reject(err.message));
    });

    return requestAsPromised;
  }
}
