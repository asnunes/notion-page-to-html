import { NodeFetchHttpPostClient } from '../../infra/usecases/http-post/node-fetch-http-post-client';
import { NotionApiPageFetcher } from '../../infra/usecases/to-notion-api-content-responses/notion-api-page-fetcher';

export const makeNotionApiPageFetcher = (pageId: string): NotionApiPageFetcher => {
  const httpPostClient = new NodeFetchHttpPostClient();
  return new NotionApiPageFetcher(pageId, httpPostClient);
};
