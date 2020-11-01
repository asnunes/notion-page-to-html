import { isBrowser } from 'browser-or-node';
import { NotionApiPageFetcher } from '../../infra/usecases/to-notion-api-content-responses/notion-api-page-fetcher';

export const makeNotionApiPageFetcher = async (pageId: string): Promise<NotionApiPageFetcher> => {
  const Client = isBrowser
    ? (await import('../../infra/usecases/http-post/node-fetch-http-post-client')).NodeFetchHttpPostClient
    : (await import('../../infra/usecases/http-post/node-http-post-client')).NodeHttpPostClient;

  const httpPostClient = new Client();
  return Promise.resolve(new NotionApiPageFetcher(pageId, httpPostClient));
};
