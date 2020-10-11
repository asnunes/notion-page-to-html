import { HttpPostClient, HttpResponse } from '../../../data/protocols/http-request';
import { NotionApiContentResponse } from '../../protocols/notion-api-content-response';
import { NotionPageIdValidator, PageRecordValidator } from './validation';
import { FormatFilter } from '../to-blocks/format-filter';

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

    const contentIds = pageData.results[0].value.content;
    const contents = contentIds
      .filter((id: string) => !!chunkData.recordMap?.block[id])
      .map((id: string) => chunkData.recordMap?.block[id].value);

    return contents.map((c: Record<string, any>, index: number) => {
      const title = index === 0 && pageData.results[0].value.properties?.title[0][0];
      const format = c.format;

      return {
        id: c.id,
        type: c.type,
        properties: c.properties,
        ...(title && { title }),
        ...(format && { format }),
      };
    });
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
}
