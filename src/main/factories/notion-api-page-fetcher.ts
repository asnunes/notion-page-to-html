import { NotionApiPageFetcher } from '../../infra/usecases/to-notion-api-content-responses/notion-api-page-fetcher';
import { NodeHttpPostClient } from '../../infra/usecases/http-post/node-http-post-client';

export const makeNotionApiPageFetcher = async (pageId: string): Promise<NotionApiPageFetcher> => {
  const httpPostClient = new NodeHttpPostClient();
  return Promise.resolve(new NotionApiPageFetcher(pageId, httpPostClient));
};
