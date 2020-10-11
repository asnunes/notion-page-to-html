import { Block } from '../../../data/protocols/blocks';
import { NotionApiContentResponse } from '../../protocols/notion-api-content-response';
import { PropTitleToDecorableTexts } from '../to-blocks/prop-title-to-decorable-texts';

export class NotionApiContentResponsesToBlocks {
  private readonly _notionApiContentResponses: NotionApiContentResponse[];

  constructor(notionApiContentResponses: NotionApiContentResponse[]) {
    this._notionApiContentResponses = notionApiContentResponses;
  }

  toBlocks(): Block[] {
    return this._notionApiContentResponses.map((nacr) => ({
      id: nacr.id,
      type: nacr.type,
      properties: this._filteredProperties(nacr),
      children: [] as Block[],
      decorableTexts: new PropTitleToDecorableTexts(nacr.properties.title).toDecorableTexts(),
    }));
  }

  private _filteredProperties(notionApiContentResponse: NotionApiContentResponse): Record<string, any> {
    return Object.entries(notionApiContentResponse.properties)
      .filter(([key]) => key !== 'title')
      .reduce<Record<string, any>>(
        (obj, [key, value]) => ({
          ...obj,
          [key]: value[0][0],
        }),
        {},
      );
  }
}
