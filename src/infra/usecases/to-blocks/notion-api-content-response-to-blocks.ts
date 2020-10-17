import { Block } from '../../../data/protocols/blocks';
import { NotionApiContentResponse } from '../../protocols/notion-api-content-response';
import { PropTitleToDecorableTexts } from '../to-blocks/prop-title-to-decorable-texts';
import { FormatFilter } from './format-filter';
import { PropertiesParser } from './properties-parser';

export class NotionApiContentResponsesToBlocks {
  private readonly _notionApiContentResponses: NotionApiContentResponse[];

  constructor(notionApiContentResponses: NotionApiContentResponse[]) {
    this._notionApiContentResponses = notionApiContentResponses;
  }

  toBlocks(): Block[] {
    if (!this._notionApiContentResponses) return [];

    return this._notionApiContentResponses.map((nacr) => ({
      id: nacr.id,
      type: nacr.type,
      format: new FormatFilter(nacr.format).filter(),
      properties: new PropertiesParser(nacr.format, nacr.properties).parse(),
      children: new NotionApiContentResponsesToBlocks(nacr.contents).toBlocks(),
      decorableTexts: new PropTitleToDecorableTexts(nacr.properties?.title).toDecorableTexts(),
    }));
  }
}
