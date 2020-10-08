import { Block } from 'data/protocols/blocks';
import { NotionApiContentResponse } from 'infra/protocols/notion-api-content-response';
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
      properties: {},
      children: [] as Block[],
      decorableTexts: new PropTitleToDecorableTexts(nacr.properties.title).toDecorableTexts(),
    }));
  }
}
