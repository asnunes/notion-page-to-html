import { Block, DecorableText, DecorationType, Decoration } from '../../data/protocols/blocks';

export const NO_TEXT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [],
  },
];

export const SINGLE_TEXT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello World',
        decorations: [],
      },
    ],
  },
];

export const SINGLE_TEXT_WITH_CHILDREN = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [
      {
        id: '80d0fc46-5511-4d1d-a4ec-8b2f41214426',
        type: 'text',
        properties: {},
        format: {},
        children: [] as Block[],
        decorableTexts: [
          {
            text: 'This is a child',
            decorations: [],
          },
        ],
      },
      {
        id: '80d0fc46-5511-4d1d-a4ec-8b1212114426',
        type: 'text',
        properties: {},
        format: {},
        children: [] as Block[],
        decorableTexts: [
          {
            text: 'This is a child too',
            decorations: [],
          },
        ],
      },
    ] as Block[],
    decorableTexts: [
      {
        text: 'Hello World',
        decorations: [],
      },
    ],
  },
];

export const SINGLE_TEXT_WITH_BOLD = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
        ],
      },
    ],
  },
];

export const SINGLE_TEXT_WITH_ITALIC = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World',
        decorations: [
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
    ],
  },
];

export const SINGLE_TEXT_WITH_BOLD_AND_ITALIC_SEPARATED = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [{ type: 'bold' }],
      },
      {
        text: 'World',
        decorations: [{ type: 'italic' }],
      },
    ],
  },
];

export const SINGLE_TEXT_WITH_UNDERLINE = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World',
        decorations: [
          {
            type: 'underline' as DecorationType,
          },
        ],
      },
    ],
  },
];

export const SINGLE_TEXT_WITH_STRIKETHROUGH = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World',
        decorations: [
          {
            type: 'strikethrough' as DecorationType,
          },
        ],
      },
    ],
  },
];

export const SINGLE_TEXT_WITH_CODE_DECORATION = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'myVar',
        decorations: [
          {
            type: 'code' as DecorationType,
          },
        ],
      },
    ],
  },
];

export const SINGLE_TEXT_WITH_LINK = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World',
        decorations: [
          {
            type: 'link' as DecorationType,
            value: 'https://www.google.com',
          },
        ],
      },
    ],
  },
];

export const SINGLE_TEXT_WITH_FORMAT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: { block_color: 'red_background' },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World',
        decorations: [
          {
            type: 'link' as DecorationType,
            value: 'https://www.google.com',
          },
        ],
      },
    ],
  },
];

export const SINGLE_TEXT_WITH_EQUATION_DECORATION = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello World ',
        decorations: [],
      },
      {
        text: '⁍',
        decorations: [
          {
            type: 'equation' as DecorationType,
            value: '2x',
          },
        ],
      },
    ],
  },
];

export const SINGLE_TEXT_WITH_COLOR = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello',
        decorations: [
          {
            type: 'color' as DecorationType,
            value: 'purple',
          },
        ],
      },
    ],
  },
];

export const SINGLE_TEXT_WITH_COLOR_BACKGROUND = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello',
        decorations: [
          {
            type: 'color' as DecorationType,
            value: 'yellow_background',
          },
        ],
      },
    ],
  },
];

export const SINGLE_TEXT_WITH_BOLD_AND_ITALIC = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
    ],
  },
];

export const TEXT_WITH_DECORATION = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World ',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
      {
        text: 'and',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
        ],
      },
      {
        text: ' Sun',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
    ],
  },
];

export const MULTILINE_TEXT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello World\nIs everything alright?\nYes, Dude!',
        decorations: [],
      },
    ],
  },
];

export const TEXT_WITH_FORMAT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {
      block_color: 'red_background',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a text with red background',
        decorations: [],
      },
    ],
  },
];

export const TEXT_WITH_FORMAT_FOREGROUND = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {},
    format: {
      block_color: 'purple',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a text with purple color',
        decorations: [],
      },
    ],
  },
];

export const H1_TEXT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'header',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a h1 title',
        decorations: [],
      },
    ],
  },
];

export const H1_TEXT_WITH_DECORATIONS = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'header',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World ',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
      {
        text: 'and',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
        ],
      },
      {
        text: ' Sun',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
    ],
  },
];

export const H1_WITH_FORMAT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'header',
    properties: {},
    format: {
      block_color: 'green_background',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a h1 with red background',
        decorations: [],
      },
    ],
  },
];

export const H1_WITH_FORMAT_FOREGROUND = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'header',
    properties: {},
    format: {
      block_color: 'yellow',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a h1 with yellow color',
        decorations: [],
      },
    ],
  },
];

export const H2_TEXT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'sub_header',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a h2 title',
        decorations: [],
      },
    ],
  },
];

export const H2_TEXT_WITH_DECORATIONS = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'sub_header',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World ',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
      {
        text: 'and',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
        ],
      },
      {
        text: ' Sun',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
    ],
  },
];

export const H2_WITH_FORMAT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'sub_header',
    properties: {},
    format: {
      block_color: 'yellow_background',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a h2 with yellow background',
        decorations: [],
      },
    ],
  },
];

export const H2_WITH_FORMAT_FOREGROUND = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'sub_header',
    properties: {},
    format: {
      block_color: 'gray',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a h2 with gray color',
        decorations: [],
      },
    ],
  },
];

export const H3_TEXT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'sub_sub_header',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a h3 title',
        decorations: [],
      },
    ],
  },
];

export const H3_TEXT_WITH_DECORATIONS = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'sub_sub_header',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World ',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
      {
        text: 'and',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
        ],
      },
      {
        text: ' Sun',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
    ],
  },
];

export const H3_WITH_FORMAT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'sub_sub_header',
    properties: {},
    format: {
      block_color: 'orange_background',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a h3 with orange background',
        decorations: [],
      },
    ],
  },
];

export const H3_WITH_FORMAT_FOREGROUND = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'sub_sub_header',
    properties: {},
    format: {
      block_color: 'brown',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a h3 with brown color',
        decorations: [],
      },
    ],
  },
];

export const UNORDERED_LIST_WITH_SINGLE_ITEM = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'bulleted_list',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a test',
        decorations: [],
      },
    ],
  },
];

export const UNORDERED_LIST_WITH_CHILDREN = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'bulleted_list',
    properties: {},
    format: {},
    children: [
      {
        id: '80d0fc46-5511-4d1d-a4ec-8b2f41214426',
        type: 'bulleted_list',
        properties: {},
        format: {},
        children: [] as Block[],
        decorableTexts: [
          {
            text: 'This is a child',
            decorations: [],
          },
        ],
      },
      {
        id: '80d0fc46-5511-4d1d-a4ec-8b1212114426',
        type: 'bulleted_list',
        properties: {},
        format: {},
        children: [] as Block[],
        decorableTexts: [
          {
            text: 'This is a child too',
            decorations: [],
          },
        ],
      },
    ] as Block[],
    decorableTexts: [
      {
        text: 'Hello World',
        decorations: [],
      },
    ],
  },
];

export const UNORDERED_LIST_WITH_SINGLE_ITEM_AND_FORMAT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'bulleted_list',
    properties: {},
    format: {
      block_color: 'brown_background',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a item with background',
        decorations: [],
      },
    ],
  },
];

export const UNORDERED_LIST_WITH_SINGLE_ITEM_AND_FORMAT_FOREGROUND = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'bulleted_list',
    properties: {},
    format: {
      block_color: 'orange',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a item with color',
        decorations: [],
      },
    ],
  },
];

export const UNORDERED_LIST_WITH_TWO_ITEMS = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'bulleted_list',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a test',
        decorations: [],
      },
    ],
  },
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d752133',
    type: 'bulleted_list',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a test too',
        decorations: [],
      },
    ],
  },
];

export const UNORDERED_LIST_WITH_DECORATED_ITEMS = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'bulleted_list',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World ',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
      {
        text: 'and',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
        ],
      },
      {
        text: ' Sun',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
    ],
  },
];

export const ORDERED_LIST_WITH_SINGLE_ITEM = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'numbered_list',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a test',
        decorations: [],
      },
    ],
  },
];

export const ORDERED_LIST_WITH_CHILDREN = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'numbered_list',
    properties: {},
    format: {},
    children: [
      {
        id: '80d0fc46-5511-4d1d-a4ec-8b2f41214426',
        type: 'numbered_list',
        properties: {},
        format: {},
        children: [] as Block[],
        decorableTexts: [
          {
            text: 'This is a child',
            decorations: [],
          },
        ],
      },
      {
        id: '80d0fc46-5511-4d1d-a4ec-8b1212114426',
        type: 'numbered_list',
        properties: {},
        format: {},
        children: [] as Block[],
        decorableTexts: [
          {
            text: 'This is a child too',
            decorations: [],
          },
        ],
      },
    ] as Block[],
    decorableTexts: [
      {
        text: 'Hello World',
        decorations: [],
      },
    ],
  },
];

export const ORDERED_LIST_WITH_SINGLE_ITEM_AND_FORMAT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'numbered_list',
    properties: {},
    format: {
      block_color: 'gray_background',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a item with background',
        decorations: [],
      },
    ],
  },
];

export const ORDERED_LIST_WITH_SINGLE_ITEM_AND_FORMAT_FOREGROUND = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'numbered_list',
    properties: {},
    format: {
      block_color: 'green',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a item with color',
        decorations: [],
      },
    ],
  },
];

export const ORDERED_LIST_WITH_TWO_ITEMS = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'numbered_list',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a test',
        decorations: [],
      },
    ],
  },
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d752133',
    type: 'numbered_list',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a test too',
        decorations: [],
      },
    ],
  },
];

export const ORDERED_LIST_WITH_DECORATED_ITEMS = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'numbered_list',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World ',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
      {
        text: 'and',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
        ],
      },
      {
        text: ' Sun',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
    ],
  },
];

export const TODO = [
  {
    id: 'd1e33c43-5079-4e66-961a-df032d38d532',
    type: 'to_do',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a test',
        decorations: [],
      },
    ],
  },
];

export const TODO_WITH_CHILDREN = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'to_do',
    properties: {},
    format: {},
    children: [
      {
        id: '80d0fc46-5511-4d1d-a4ec-8b2f41214426',
        type: 'to_do',
        properties: {},
        format: {},
        children: [] as Block[],
        decorableTexts: [
          {
            text: 'This is a child',
            decorations: [],
          },
        ],
      },
      {
        id: '80d0fc46-5511-4d1d-a4ec-8b1212114426',
        type: 'to_do',
        properties: { checked: 'Yes' },
        format: {},
        children: [] as Block[],
        decorableTexts: [
          {
            text: 'This is a child too',
            decorations: [],
          },
        ],
      },
    ] as Block[],
    decorableTexts: [
      {
        text: 'Hello World',
        decorations: [],
      },
    ],
  },
];

export const TODO_WITH_FORMAT = [
  {
    id: 'd1e33c43-5079-4e66-961a-df032d38d532',
    type: 'to_do',
    properties: {},
    format: {
      block_color: 'blue_background',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a todo with style',
        decorations: [],
      },
    ],
  },
];

export const TODO_WITH_FORMAT_FOREGROUND = [
  {
    id: 'd1e33c43-5079-4e66-961a-df032d38d532',
    type: 'to_do',
    properties: {},
    format: {
      block_color: 'blue',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a todo with style',
        decorations: [],
      },
    ],
  },
];

export const CHECKED_TODO = [
  {
    id: 'd1e33c43-5079-4e66-961a-df032d38d532',
    type: 'to_do',
    properties: { checked: 'Yes' },
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a test',
        decorations: [],
      },
    ],
  },
];

export const UNCHECKED_AND_CHECKED_TODOS = [
  {
    id: 'd1e33c43-5079-4e66-961a-df032d2332',
    type: 'to_do',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a test',
        decorations: [],
      },
    ],
  },
  {
    id: 'd1e33c43-5079-4e66-961a-df032d38d532',
    type: 'to_do',
    properties: { checked: 'Yes' },
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a test too',
        decorations: [],
      },
    ],
  },
];

export const CODE = [
  {
    id: '479c7b34-6c22-4f2d-b947-8f47d02b48d6',
    type: 'code',
    properties: { language: 'JavaScript' },
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'function test() {\n\tvar isTesting = true;\n\treturn isTesting;\n}',
        decorations: [],
      },
    ],
  },
];

export const CODE_WITH_DECORATION = [
  {
    id: '479c7b34-6c22-4f2d-b947-8f47d02b48d6',
    type: 'code',
    properties: { language: 'JavaScript' },
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'function test() {\n\tvar isTesting = true;\n\treturn ',
        decorations: [],
      },
      {
        text: 'isTesting',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
        ],
      },
      {
        text: ';\n}',
        decorations: [],
      },
    ],
  },
];

export const CODE_WITH_4_SPACES = [
  {
    id: '479c7b34-6c22-4f2d-b947-8f47d02b48d6',
    type: 'code',
    properties: { language: 'Python' },
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: `def print_pattern():
    size = 4
    for i in range(size):
        print("*" * size)`,
        decorations: [],
      },
    ],
  },
];

export const QUOTE = [
  {
    id: 'e0a0cfa3-1f64-438b-ac79-95e5c7ad4565',
    type: 'quote',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This a quote',
        decorations: [] as Decoration[],
      },
    ],
  },
];

export const QUOTE_WITH_FORMAT = [
  {
    id: 'e0a0cfa3-1f64-438b-ac79-95e5c7ad4565',
    type: 'quote',
    properties: {},
    format: {
      block_color: 'purple_background',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This a quote with background',
        decorations: [] as Decoration[],
      },
    ],
  },
];

export const QUOTE_WITH_FORMAT_FOREGROUND = [
  {
    id: 'e0a0cfa3-1f64-438b-ac79-95e5c7ad4565',
    type: 'quote',
    properties: {},
    format: {
      block_color: 'pink',
    },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This a quote with color',
        decorations: [] as Decoration[],
      },
    ],
  },
];

export const QUOTE_WITH_DECORATION = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'quote',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'Hello ',
        decorations: [],
      },
      {
        text: 'World ',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
      {
        text: 'and',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
        ],
      },
      {
        text: ' Sun',
        decorations: [
          {
            type: 'bold' as DecorationType,
          },
          {
            type: 'italic' as DecorationType,
          },
        ],
      },
    ],
  },
];

export const TEXT_BETWEEN_DIVIDER = [
  {
    id: 'e0a0cfa3-438b-ac79-95e5c7ad4565',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This a text',
        decorations: [],
      },
    ],
  },
  {
    id: 'e0a0cfa3-1f64-438b-ac79-95e5c7ad4565',
    type: 'divider',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [],
  },
  {
    id: 'e0a0cfa3-438b-95e5c7ad4565',
    type: 'text',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This a text too',
        decorations: [],
      },
    ],
  },
];

export const EMPTY_EQUATION = [
  {
    id: '9b01339a-9de6-4eb1-bd7a-4c6d537590c7',
    type: 'equation',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [],
  },
];

export const EQUATION = [
  {
    id: '9b01339a-9de6-4eb1-bd7a-4c6d537590c7',
    type: 'equation',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: '\\int 2xdx = x^2 + C',
        decorations: [],
      },
    ],
  },
];

export const NO_YOUTUBE_VIDEO = [
  {
    id: 'dcde43cb-7131-4687-8f22-c9789fa75f46',
    type: 'video',
    properties: {
      source: 'https://www.example.com/watch?v=8G80nuEyDN4',
    },
    format: {},
    children: [] as Block[],
    decorableTexts: [],
  },
];

export const YOUTUBE_VIDEO = [
  {
    id: 'dcde43cb-7131-4687-8f22-c9789fa75f46',
    type: 'video',
    properties: {
      source: 'https://www.youtube.com/watch?v=xBFqxBfLJWc',
    },
    format: {},
    children: [] as Block[],
    decorableTexts: [],
  },
];

export const TEXT_WITH_YOUTUBE_VIDEO = [
  {
    id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
    type: 'page',
    properties: {},
    format: {},
    decorableTexts: [{ text: 'Simple Page Test', decorations: [] }],
    children: [
      {
        id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
        type: 'text',
        properties: {},
        format: {},
        children: [] as Block[],
        decorableTexts: [
          {
            text: 'Hello World',
            decorations: [] as Decoration[],
          },
        ],
      },
      {
        id: 'dcde43cb-7131-4687-8f22-c9789fa75f46',
        type: 'video',
        properties: {
          source: 'https://www.youtube.com/watch?v=xBFqxBfLJWc',
        },
        format: {},
        children: [] as Block[],
        decorableTexts: [] as DecorableText[],
      },
    ],
  },
];

export const PAGE_WITH_YOUTUBE_VIDEO = [
  {
    id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
    type: 'page',
    properties: {},
    format: {},
    decorableTexts: [{ text: 'Simple Page Test', decorations: [] }],
    children: [
      {
        id: 'dcde43cb-7131-4687-8f22-c9789fa75f46',
        type: 'video',
        properties: {
          source: 'https://www.youtube.com/watch?v=xBFqxBfLJWc',
        },
        format: {},
        children: [] as Block[],
        decorableTexts: [] as DecorableText[],
      },
    ],
  },
];

export const IMAGE = [
  {
    id: 'ec3b36fd-f77d-46b4-8592-5966488612b1',
    type: 'image',
    properties: {
      source:
        'https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bcedd078-56cd-4137-a28a-af16b5746874/767-50x50.jpg',
    },
    format: {},
    children: [] as Block[],
    decorableTexts: [],
  },
];

export const IMAGE_WITH_CAPTION = [
  {
    id: 'ec3b36fd-f77d-46b4-8592-5966488612b1',
    type: 'image',
    properties: {
      source:
        'https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bcedd078-56cd-4137-a28a-af16b5746874/767-50x50.jpg',
      caption: 'It is a caption',
    },
    format: {},
    children: [] as Block[],
    decorableTexts: [],
  },
];

export const IMAGE_WITH_CUSTOM_SIZE = [
  {
    id: 'ec3b36fd-f77d-46b4-8592-5966488612b1',
    type: 'image',
    properties: {
      source:
        'https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bcedd078-56cd-4137-a28a-af16b5746874/767-50x50.jpg',
    },
    format: { block_width: 240 },
    children: [] as Block[],
    decorableTexts: [],
  },
];

export const CALLOUT = [
  {
    id: '16431c64-3bf0-481f-a29f-d544780d84f3',
    type: 'callout',
    properties: { page_icon: '💡' },
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a callout',
        decorations: [],
      },
    ],
  },
];

export const CALLOUT_WITH_IMAGE = [
  {
    id: '16431c64-3bf0-481f-a29f-d544780d84f3',
    type: 'callout',
    properties: { page_icon: 'https://example.com/image.png' },
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a callout',
        decorations: [],
      },
    ],
  },
];

export const CALLOUT_WITH_BACKGROUND = [
  {
    id: '16431c64-3bf0-481f-a29f-d544780d84f3',
    type: 'callout',
    properties: { page_icon: '💡' },
    format: { block_color: 'red_background' },
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'This is a callout',
        decorations: [],
      },
    ],
  },
];

export const DETAILS_WITH_DECORATION = [
  {
    id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
    type: 'page',
    properties: {},
    format: {},
    decorableTexts: [{ text: 'Simple Page Test', decorations: [] }],
    children: [
      {
        id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
        type: 'toggle',
        properties: {},
        format: {},
        children: [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {},
            format: {},
            children: [] as Block[],
            decorableTexts: [
              {
                text: 'Hello World',
                decorations: [],
              },
            ],
          },
        ],
        decorableTexts: [
          {
            text: 'Hello ',
            decorations: [],
          },
          {
            text: 'World ',
            decorations: [
              {
                type: 'bold' as DecorationType,
              },
              {
                type: 'italic' as DecorationType,
              },
            ],
          },
          {
            text: 'and',
            decorations: [
              {
                type: 'bold' as DecorationType,
              },
            ],
          },
          {
            text: ' Sun',
            decorations: [
              {
                type: 'bold' as DecorationType,
              },
              {
                type: 'italic' as DecorationType,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const DETAILS = [
  {
    id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
    type: 'page',
    properties: {},
    format: {},
    decorableTexts: [{ text: 'Simple Page Test', decorations: [] }],
    children: [
      {
        id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
        type: 'toggle',
        properties: {},
        format: {},
        children: [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {},
            format: {},
            children: [] as Block[],
            decorableTexts: [
              {
                text: 'Hello World',
                decorations: [],
              },
            ],
          },
        ],
        decorableTexts: [
          {
            text: 'This is a detail',
            decorations: [] as Decoration[],
          },
        ],
      },
    ],
  },
];

export const DETAILS_WITH_BG = [
  {
    id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
    type: 'page',
    properties: {},
    format: {},
    decorableTexts: [{ text: 'Simple Page Test', decorations: [] }],
    children: [
      {
        id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
        type: 'toggle',
        properties: {},
        format: {
          block_color: 'red_background',
        },
        children: [
          {
            id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
            type: 'text',
            properties: {},
            format: {},
            children: [] as Block[],
            decorableTexts: [
              {
                text: 'Hello World',
                decorations: [],
              },
            ],
          },
        ],
        decorableTexts: [
          {
            text: 'This is a detail',
            decorations: [] as Decoration[],
          },
        ],
      },
    ],
  },
];

export const UNKNOWN = [
  {
    id: 'd1e33c43-5079-4e66-961a-df032d38d532',
    type: 'headdfafdafader',
    properties: {},
    format: {},
    children: [] as Block[],
    decorableTexts: [
      {
        text: 'What?!',
        decorations: [],
      },
    ],
  },
];

export const PAGE_WITH_TITLE = {
  id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
  type: 'page',
  properties: {},
  format: {},
  decorableTexts: [{ text: 'Simple Page Title', decorations: [] }],
  children: [
    {
      id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
      type: 'text',
      properties: {},
      format: {},
      children: [] as Block[],
      decorableTexts: [
        {
          text: 'Hello World',
          decorations: [],
        },
      ],
    },
  ],
};

export const PAGE_WITHOUT_TITLE = {
  id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
  type: 'page',
  properties: {},
  format: {},
  decorableTexts: [],
  children: [
    {
      id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
      type: 'text',
      properties: {},
      format: {},
      children: [] as Block[],
      decorableTexts: [
        {
          text: 'Hello World',
          decorations: [],
        },
      ],
    },
  ],
};

export const PAGE_WITH_TITLE_AND_COVER_IMAGE = [
  {
    id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
    type: 'page',
    properties: { page_cover: '/images/page-cover/solid_blue.png' },
    format: { page_cover_position: 0.6 },
    decorableTexts: [{ text: 'Page Title', decorations: [] }],
    children: [],
  },
];

export const PAGE_WITH_TITLE_AND_ICON = [
  {
    id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
    type: 'page',
    properties: { page_icon: '🤴' },
    format: {},
    decorableTexts: [{ text: 'Page Title', decorations: [] }],
    children: [],
  },
];

export const PAGE_WITH_TITLE_AND_COVER_IMAGE_NOT_FROM_NOTION = [
  {
    id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
    type: 'page',
    properties: { page_cover: 'https://www.example.com/some_image.png' },
    format: { page_cover_position: 0.6 },
    decorableTexts: [{ text: 'Page Title', decorations: [] }],
    children: [],
  },
];

export const PAGE_WITH_TITLE_AND_INVALID_COVER_IMAGE = [
  {
    id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
    type: 'page',
    properties: { page_cover: 'https://www.example.com/s.html' },
    format: { page_cover_position: 0.6 },
    decorableTexts: [{ text: 'Page Title', decorations: [] }],
    children: [],
  },
];

export const PAGE_WITH_TITLE_AND_EMOJI_ICON = [
  {
    id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
    type: 'page',
    properties: { page_icon: '🤴' },
    format: {},
    decorableTexts: [{ text: 'Page Title', decorations: [] }],
    children: [],
  },
];

export const PAGE_WITH_TITLE_AND_IMAGE_ICON = [
  {
    id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
    type: 'page',
    properties: { page_icon: 'https://www.example.com/some_image.png' },
    format: {},
    decorableTexts: [{ text: 'Page Title', decorations: [] }],
    children: [],
  },
];
