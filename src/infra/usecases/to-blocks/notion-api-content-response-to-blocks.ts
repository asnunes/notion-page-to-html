import { Block } from '../../../data/protocols/blocks';
import { NotionApiContentResponse } from '../../protocols/notion-api-content-response';
import { PropTitleToDecorableTexts } from '../to-blocks/prop-title-to-decorable-texts';
import { FormatFilter } from './format-filter';

export class NotionApiContentResponsesToBlocks {
  private readonly _notionApiContentResponses: NotionApiContentResponse[];

  constructor(notionApiContentResponses: NotionApiContentResponse[]) {
    this._notionApiContentResponses = notionApiContentResponses;
  }

  toBlocks(): Block[] {
    return this._notionApiContentResponses.map((nacr) => ({
      id: nacr.id,
      type: nacr.type,
      format: new FormatFilter(nacr.format).filter(),
      properties: this._filteredProperties(nacr),
      children: [] as Block[],
      decorableTexts: new PropTitleToDecorableTexts(nacr.properties?.title).toDecorableTexts(),
    }));
  }

  private _filteredProperties(notionApiContentResponse: NotionApiContentResponse): Record<string, any> {
    if (!notionApiContentResponse.properties) return {};

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

const res = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    title: 'Simple Page Text 2',
    type: 'text',
    properties: {
      title: [
        ['Hello ', [['h', 'yellow_background']]],
        ['World', [['a', 'http://www.google.com.br']]],
      ],
    },
  },
  {
    id: 'd1e33c43-5079-4e66-961a-df032d38d532',
    type: 'sub_sub_header',
    properties: { title: [['This is a title h2']] },
  },
  {
    id: 'a37133f6-4202-4913-9066-93e2ac86b4b3',
    type: 'image',
    properties: {
      source: [
        [
          'https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bcedd078-56cd-4137-a28a-af16b5746874/767-50x50.jpg',
        ],
      ],
      caption: [['Testando essa caption']],
    },
  },
  { id: '9147fe2c-187f-45d3-b3f9-aa9ad65e3e2d', type: 'text' },
];

const teste = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    children: [],
    decorableTexts: [
      { text: 'Hello ', decorations: [{ type: 'color', value: 'yellow_background' }] },
      { text: 'World', decorations: [{ type: 'link', value: 'http://www.google.com.br' }] },
    ],
  },
  {
    id: 'd1e33c43-5079-4e66-961a-df032d38d532',
    type: 'sub_sub_header',
    properties: {},
    children: [],
    decorableTexts: [{ text: 'This is a title h2', decorations: [] }],
  },
  {
    id: 'a37133f6-4202-4913-9066-93e2ac86b4b3',
    type: 'image',
    properties: {
      source:
        'https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bcedd078-56cd-4137-a28a-af16b5746874/767-50x50.jpg',
      caption: 'Testando essa caption',
    },
    children: [],
    decorableTexts: [],
  },
  { id: '9147fe2c-187f-45d3-b3f9-aa9ad65e3e2d', type: 'text', properties: {}, children: [], decorableTexts: [] },
];
