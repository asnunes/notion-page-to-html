import { HttpResponse } from './http-response';

export interface HttpGetClient {
  get(url: string): Promise<HttpResponse>;
}
