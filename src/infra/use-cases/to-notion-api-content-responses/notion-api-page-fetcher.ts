import { HttpPostClient, HttpResponse } from '../../../data/protocols/http-request';
import { NotionApiContentResponse } from '../../protocols/notion-api-content-response';
import { NotionPageIdValidator, PageRecordValidator, PageChunkValidator } from './services';

const NOTION_API_PATH = 'https://www.notion.so/api/v3/';

export class NotionApiPageFetcher {
  constructor(
    private readonly notionPageId: string,
    private readonly httpPostClient: HttpPostClient,
    private readonly notionPageIdValidator: NotionPageIdValidator,
    private readonly pageRecordValidator: PageRecordValidator,
    private readonly pageChunkValidator: PageChunkValidator,
  ) {
    const pageIdError = this.notionPageIdValidator.validate(this.notionPageId);
    if (pageIdError) throw pageIdError;
  }

  async getNotionPageContents(): Promise<NotionApiContentResponse[]> {
    const pageRecords = await this.fetchRecordValues();
    const pageRecordError = this.pageRecordValidator.validate(this.notionPageId, pageRecords);
    if (pageRecordError) throw pageRecordError;

    const chunk = await this.fetchPageChunk();
    const chunkError = await this.pageChunkValidator.validate(this.notionPageId, chunk.status);
    if (chunkError) throw chunkError;

    const pageData = pageRecords.data as Record<string, any>;
    const chunkData = chunk.data as Record<string, any>;

    const contentIds = [pageData.results[0].value.id];
    return this.mapContentsIdToContent(contentIds, chunkData, pageData);
  }

  private async mapContentsIdToContent(
    contentIds: string[],
    chunkData: Record<string, any>,
    pageData: Record<string, any>,
  ): Promise<NotionApiContentResponse[]> {
    const contentsNotInChunk = await this.contentsNotInChunk(contentIds, chunkData, pageData);
    const contentsInChunk = await this.contentsInChunk(contentIds, chunkData, pageData);
    const unorderedContents = contentsInChunk.concat(contentsNotInChunk).filter((c) => !!contentIds.includes(c.id));

    return unorderedContents.sort((a, b) => contentIds.indexOf(a.id) - contentIds.indexOf(b.id));
  }

  private async contentsNotInChunk(
    contentIds: string[],
    chunkData: Record<string, any>,
    pageData: Record<string, any>,
  ): Promise<NotionApiContentResponse[]> {
    const contentsIdsNotInChunk = contentIds.filter((id: string) => !chunkData.recordMap?.block[id]);
    const contentsNotInChunkRecords = await this.fetchRecordValuesByContentIds(contentsIdsNotInChunk);
    const dataNotInChunk = contentsIdsNotInChunk
      .map((id) => {
        const data = contentsNotInChunkRecords.data as Record<string, any>;
        return data.recordMap?.block[id].value;
      })
      .filter((d) => !!d);

    return Promise.all(
      dataNotInChunk.map(async (c: Record<string, any>) => {
        const format = c.format;

        return {
          id: c.id,
          type: c.type,
          properties: c.properties,
          ...(format && { format }),
          contents: await this.mapContentsIdToContent(c.content || [], chunkData, pageData),
        };
      }),
    );
  }

  private async contentsInChunk(
    contentIds: string[],
    chunkData: Record<string, any>,
    pageData: Record<string, any>,
  ): Promise<NotionApiContentResponse[]> {
    const dataInChunk = contentIds
      .filter((id: string) => !!chunkData.recordMap?.block[id])
      .map((id: string) => chunkData.recordMap?.block[id].value);

    return Promise.all(
      dataInChunk.map(async (c: Record<string, any>) => {
        const format = c.format;

        return {
          id: c.id,
          type: c.type,
          properties: c.properties,
          ...(format && { format }),
          contents: await this.mapContentsIdToContent(c.content || [], chunkData, pageData),
        };
      }),
    );
  }

  private async fetchRecordValues(): Promise<HttpResponse> {
    return this.httpPostClient.post(NOTION_API_PATH + 'getRecordValues', {
      requests: [
        {
          id: this.notionPageId,
          table: 'block',
        },
      ],
    });
  }

  private fetchPageChunk(): Promise<HttpResponse> {
    return this.httpPostClient.post(NOTION_API_PATH + 'loadPageChunk', {
      pageId: this.notionPageId,
      limit: 999999,
      cursor: {
        stack: [],
      },
      chunkNumber: 0,
      verticalColumns: false,
    });
  }

  private fetchRecordValuesByContentIds(contentIds: string[]): Promise<HttpResponse> {
    if (contentIds.length === 0)
      return Promise.resolve({
        status: 200,
        data: {},
      });

    return this.httpPostClient.post(NOTION_API_PATH + 'syncRecordValues', {
      requests: contentIds.map((id) => ({
        id,
        table: 'block',
        version: -1,
      })),
    });
  }
}
