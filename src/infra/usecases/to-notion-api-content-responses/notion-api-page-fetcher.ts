import { HttpPostClient, HttpResponse } from '../../../data/protocols/http-request';
import { NotionApiContentResponse } from '../../protocols/notion-api-content-response';
import { NotionPageIdValidator, PageRecordValidator } from './validation';

const NOTION_API_PATH = 'https://www.notion.so/api/v3/';

export class NotionApiPageFetcher {
  private readonly _httpPostClient: HttpPostClient;
  private readonly _notionPageId: string;

  constructor(notionPageId: string | undefined, httpPostClient: HttpPostClient) {
    const pageIdError = new NotionPageIdValidator(notionPageId).validate();
    if (pageIdError) throw pageIdError;

    this._httpPostClient = httpPostClient;
    this._notionPageId = notionPageId || '';
  }

  async getNotionPageContents(): Promise<NotionApiContentResponse[]> {
    const pageRecords = await this._fetchRecordValues();

    const pageRecordError = new PageRecordValidator(this._notionPageId, pageRecords).validate();
    if (pageRecordError) throw pageRecordError;

    const chunk = await this._fetchPageChunk();

    const pageData = pageRecords.data as Record<string, any>;
    const chunkData = chunk.data as Record<string, any>;

    const contentIds = [pageData.results[0].value.id];
    return this._mapContentsIdToContent(contentIds, chunkData, pageData);
  }

  private async _mapContentsIdToContent(
    contentIds: string[],
    chunkData: Record<string, any>,
    pageData: Record<string, any>,
  ): Promise<NotionApiContentResponse[]> {
    const contentsNotInChunk = await this._contentsNotInChunk(contentIds, chunkData, pageData);
    const contentsInChunk = await this._contentsInChunk(contentIds, chunkData, pageData);
    const unorderedContents = contentsInChunk.concat(contentsNotInChunk).filter((c) => !!contentIds.includes(c.id));

    return unorderedContents.sort((a, b) => contentIds.indexOf(a.id) - contentIds.indexOf(b.id));
  }

  private async _contentsNotInChunk(
    contentIds: string[],
    chunkData: Record<string, any>,
    pageData: Record<string, any>,
  ): Promise<NotionApiContentResponse[]> {
    const contentsIdsNotInChunk = contentIds.filter((id: string) => !chunkData.recordMap?.block[id]);
    const contentsNotInChunkRecords = await this._fetchRecordValuesByContentIds(contentsIdsNotInChunk);
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
          contents: await this._mapContentsIdToContent(c.content || [], chunkData, pageData),
        };
      }),
    );
  }

  private async _contentsInChunk(
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
          contents: await this._mapContentsIdToContent(c.content || [], chunkData, pageData),
        };
      }),
    );
  }

  private async _fetchRecordValues(): Promise<HttpResponse> {
    return this._httpPostClient.post(NOTION_API_PATH + 'getRecordValues', {
      requests: [
        {
          id: this._notionPageId,
          table: 'block',
        },
      ],
    });
  }

  private async _fetchPageChunk(): Promise<HttpResponse> {
    return this._httpPostClient.post(NOTION_API_PATH + 'loadPageChunk', {
      pageId: this._notionPageId,
      limit: 999999,
      cursor: {
        stack: [],
      },
      chunkNumber: 0,
      verticalColumns: false,
    });
  }

  private async _fetchRecordValuesByContentIds(contentIds: string[]): Promise<HttpResponse> {
    if (contentIds.length === 0)
      return {
        status: 200,
        data: {},
      };

    return this._httpPostClient.post(NOTION_API_PATH + 'syncRecordValues', {
      requests: contentIds.map((id) => ({
        id,
        table: 'block',
        version: -1,
      })),
    });
  }
}
