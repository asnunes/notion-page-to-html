import { NotionApiPageFetcher } from '../../infra/use-cases/to-notion-api-content-responses/notion-api-page-fetcher';
import { NodeHttpPostClient } from '../../infra/use-cases/http-post/node-http-post-client';
import {
  NotionPageIdValidator,
  PageChunkValidator,
  PageRecordValidator,
} from '../../infra/use-cases/to-notion-api-content-responses/services';

export const createNotionApiPageFetcher = async (pageId: string): Promise<NotionApiPageFetcher> => {
  const httpPostClient = new NodeHttpPostClient();

  const notionPageIdValidator = new NotionPageIdValidator();
  const pageRecordValidator = new PageRecordValidator();
  const pageChunkValidator = new PageChunkValidator();

  return new NotionApiPageFetcher(
    pageId,
    httpPostClient,
    notionPageIdValidator,
    pageRecordValidator,
    pageChunkValidator,
  );
};
