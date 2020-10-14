export const SUCCESSFUL_PAGE_CHUCK = {
  recordMap: {
    block: {
      '4d64bbc0-634d-4758-befa-85c5a3a6c22f': {
        role: 'reader',
        value: {
          id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
          version: 31,
          type: 'page',
          properties: { title: [['Simple Page Test']] },
          content: ['80d0fc46-5511-4d1d-a4ec-8b2f43d75226', 'dcde43cb-7131-4687-8f22-c9789fa75f46'],
          permissions: [{ role: 'reader', type: 'public_permission', allow_duplicate: false }],
          created_time: 1595516162445,
          last_edited_time: 1595520360000,
          parent_id: '8370825e-eb4c-483c-ace0-cc06e7dfc556',
          parent_table: 'block',
          alive: true,
          created_by_table: 'notion_user',
          created_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
          last_edited_by_table: 'notion_user',
          last_edited_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
          shard_id: 285188,
          space_id: '159177ec-0fb0-469e-a900-1a662b145a04',
        },
      },
      '80d0fc46-5511-4d1d-a4ec-8b2f43d75226': {
        role: 'reader',
        value: {
          id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
          version: 33,
          type: 'text',
          properties: { title: [['Hello World']] },
          created_time: 1595516160000,
          last_edited_time: 1595516160000,
          parent_id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
          parent_table: 'block',
          alive: true,
          created_by_table: 'notion_user',
          created_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
          last_edited_by_table: 'notion_user',
          last_edited_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
          shard_id: 285188,
          space_id: '159177ec-0fb0-469e-a900-1a662b145a04',
        },
      },
      'dcde43cb-7131-4687-8f22-c9789fa75f46': {
        role: 'reader',
        value: {
          id: 'dcde43cb-7131-4687-8f22-c9789fa75f46',
          version: 11,
          type: 'video',
          properties: { source: [['https://www.youtube.com/watch?v=xBFqxBfLJWc']] },
          format: {
            block_width: 854,
            display_source: 'https://www.youtube.com/embed/xBFqxBfLJWc?feature=oembed',
            block_full_width: false,
            block_page_width: true,
            block_aspect_ratio: 0.5620608899297423,
            block_preserve_scale: true,
          },
          created_time: 1595520317810,
          last_edited_time: 1595520360000,
          parent_id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
          parent_table: 'block',
          alive: true,
          created_by_table: 'notion_user',
          created_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
          last_edited_by_table: 'notion_user',
          last_edited_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
          shard_id: 285188,
          space_id: '159177ec-0fb0-469e-a900-1a662b145a04',
        },
      },
    },
    notion_user: {
      '408c862f-f07b-4036-b414-1ae5c5ce57b3': {
        role: 'reader',
        value: {
          id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
          version: 5,
          email: 'user@example.com',
          given_name: 'User',
          family_name: 'Name',
          onboarding_completed: true,
          mobile_onboarding_completed: true,
        },
      },
    },
    space: {},
  },
  cursor: { stack: [] },
};

export const SUCCESSFUL_RECORDS = {
  results: [
    {
      role: 'reader',
      value: {
        id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
        version: 31,
        type: 'page',
        properties: { title: [['Simple Page Test']] },
        content: ['80d0fc46-5511-4d1d-a4ec-8b2f43d75226', 'dcde43cb-7131-4687-8f22-c9789fa75f46'],
        permissions: [{ role: 'reader', type: 'public_permission', allow_duplicate: false }],
      },
    },
  ],
};

export const SUCCESSFUL_PAGE_CHUCK_WITH_CHILDREN = {
  recordMap: {
    block: {
      '4d64bbc0-634d-4758-befa-85c5a3a6c22f': {
        role: 'editor',
        value: {
          id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
          version: 262,
          type: 'page',
          properties: { title: [['Simple Page Text 2']] },
          content: ['f8cf7a08-bf80-4f8b-a842-3db49df95e4d'],
          permissions: [
            { role: 'editor', type: 'user_permission', user_id: 'user_id' },
            { role: 'reader', type: 'public_permission' },
          ],
          created_time: 1595516162445,
          last_edited_time: 1602527580000,
          parent_id: '159177ec-0fb0-469e-a900-1a662b145a04',
          parent_table: 'space',
          alive: true,
          created_by_table: 'notion_user',
          created_by_id: 'user_id',
          last_edited_by_table: 'notion_user',
          last_edited_by_id: 'user_id',
          shard_id: 285188,
          space_id: '159177ec-0fb0-469e-a900-1a662b145a04',
        },
      },
      'f8cf7a08-bf80-4f8b-a842-3db49df95e4d': {
        role: 'editor',
        value: {
          id: 'f8cf7a08-bf80-4f8b-a842-3db49df95e4d',
          version: 49,
          type: 'bulleted_list',
          properties: { title: [['Estou testando']] },
          content: ['0b73eab8-8c01-4140-ab4d-cd6a0886cd76'],
          created_time: 1602511500000,
          last_edited_time: 1602527580000,
          parent_id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
          parent_table: 'block',
          alive: true,
          created_by_table: 'notion_user',
          created_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
          last_edited_by_table: 'notion_user',
          last_edited_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
          shard_id: 285188,
          space_id: '159177ec-0fb0-469e-a900-1a662b145a04',
        },
      },
      '0b73eab8-8c01-4140-ab4d-cd6a0886cd76': {
        role: 'editor',
        value: {
          id: '0b73eab8-8c01-4140-ab4d-cd6a0886cd76',
          version: 12,
          type: 'bulleted_list',
          properties: { title: [['isso daqui']] },
          content: ['6bebe374-1569-4836-9de5-847c91ecb3f8'],
          created_time: 1602527580000,
          last_edited_time: 1602527580000,
          parent_id: 'f8cf7a08-bf80-4f8b-a842-3db49df95e4d',
          parent_table: 'block',
          alive: true,
          created_by_table: 'notion_user',
          created_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
          last_edited_by_table: 'notion_user',
          last_edited_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
          shard_id: 285188,
          space_id: '159177ec-0fb0-469e-a900-1a662b145a04',
        },
      },
      '6bebe374-1569-4836-9de5-847c91ecb3f8': {
        role: 'editor',
        value: {
          id: '6bebe374-1569-4836-9de5-847c91ecb3f8',
          version: 32,
          type: 'bulleted_list',
          properties: { title: [['vamos ver se funciona']] },
          created_time: 1602527580000,
          last_edited_time: 1602527580000,
          parent_id: '0b73eab8-8c01-4140-ab4d-cd6a0886cd76',
          parent_table: 'block',
          alive: true,
          created_by_table: 'notion_user',
          created_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
          last_edited_by_table: 'notion_user',
          last_edited_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
          shard_id: 285188,
          space_id: '159177ec-0fb0-469e-a900-1a662b145a04',
        },
      },
    },
    space: {
      '159177ec-0fb0-469e-a900-1a662b145a04': {},
    },
  },
  cursor: { stack: [] },
};

export const SUCCESSFUL_RECORDS_WITH_CHILDREN = {
  results: [
    {
      role: 'reader',
      value: {
        id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
        version: 262,
        type: 'page',
        properties: { title: [['Simple Page Text 2']] },
        content: ['f8cf7a08-bf80-4f8b-a842-3db49df95e4d'],
        permissions: [
          { role: 'editor', type: 'user_permission', user_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3' },
          { role: 'reader', type: 'public_permission' },
        ],
        created_time: 1595516162445,
        last_edited_time: 1602527580000,
        parent_id: '159177ec-0fb0-469e-a900-1a662b145a04',
        parent_table: 'space',
        alive: true,
        created_by_table: 'notion_user',
        created_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
        last_edited_by_table: 'notion_user',
        last_edited_by_id: '408c862f-f07b-4036-b414-1ae5c5ce57b3',
      },
    },
  ],
};

export const NO_PAGE_ACCESS_RECORDS = { results: [{ role: 'none' }] };

export const MISSING_CONTENT_RECORDS = {
  results: [
    {
      role: 'reader',
      value: {
        id: '9a75a541-277f-4a64-80e7-5581f36672ba',
        version: 22,
        type: 'page',
        permissions: [{ role: 'reader', type: 'public_permission' }],
        created_time: 1595551283696,
        last_edited_time: 1595551260000,
        alive: true,
      },
    },
  ],
};

export const SINGLE_TEXT_AND_TITLE_NOTION_API_CONTENT_RESPONSE = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: { title: [['Hello World']] },
    contents: [],
  },
];

export const SINGLE_TEXT_WITH_BOLD = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {
      title: [['Hello '], ['World', [['b']]]],
    },
    contents: [],
  },
];

export const SINGLE_TEXT_WITH_BOLD_AND_ITALIC_TOGETHER = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {
      title: [['Hello '], ['World', [['b'], ['i']]]],
    },
    contents: [],
  },
];

export const SINGLE_TEXT_WITH_BOLD_AND_ITALIC = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {
      title: [
        ['Hello ', [['b']]],
        ['World', [['i']]],
      ],
    },
    contents: [],
  },
];

export const SINGLE_TEXT_WITH_COLOR = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {
      title: [['Hello', [['h', 'purple']]]],
    },
    contents: [],
  },
];

export const SINGLE_TEXT_WITH_EQUATION = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: {
      title: [['Hello World '], ['⁍', [['e', '2x']]]],
    },
    contents: [],
  },
];

export const SINGLE_TEXT_WITH_LINK = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    properties: { title: [['Hello '], ['World', [['a', 'https://www.google.com']]]] },
    contents: [],
  },
];

export const SINGLE_TEXT_WITH_FORMAT = [
  {
    id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
    type: 'text',
    format: { block_color: 'red_background' },
    properties: { title: [['Hello '], ['World', [['a', 'https://www.google.com']]]] },
    contents: [],
  },
];

export const CALLOUT_WITH_PAGE_ICON = [
  {
    id: '16431c64-3bf0-481f-a29f-d544780d84f3',
    type: 'callout',
    properties: { title: [['This is a callout']] },
    format: { page_icon: '💡' },
    contents: [],
  },
];

export const TEXT_WITH_VIDEO_NOTION_API_CONTENT_RESPONSE = [
  {
    id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
    type: 'page',
    properties: { title: [['Simple Page Test']] },
    contents: [
      {
        id: '80d0fc46-5511-4d1d-a4ec-8b2f43d75226',
        type: 'text',
        properties: { title: [['Hello World']] },
        contents: [],
      },
      {
        id: 'dcde43cb-7131-4687-8f22-c9789fa75f46',
        type: 'video',
        format: {
          block_aspect_ratio: 0.5620608899297423,
          block_full_width: false,
          block_page_width: true,
          block_preserve_scale: true,
          block_width: 854,
          display_source: 'https://www.youtube.com/embed/xBFqxBfLJWc?feature=oembed',
        },
        properties: { source: [['https://www.youtube.com/watch?v=xBFqxBfLJWc']] },
        contents: [],
      },
    ],
  },
];

export const LIST_WITH_CHILDREN_RESPONSE = [
  {
    id: '4d64bbc0-634d-4758-befa-85c5a3a6c22f',
    type: 'page',
    properties: { title: [['Simple Page Text 2']] },
    contents: [
      {
        id: 'f8cf7a08-bf80-4f8b-a842-3db49df95e4d',
        type: 'bulleted_list',
        properties: { title: [['Estou testando']] },
        contents: [
          {
            id: '0b73eab8-8c01-4140-ab4d-cd6a0886cd76',
            type: 'bulleted_list',
            properties: { title: [['isso daqui']] },
            contents: [
              {
                id: '6bebe374-1569-4836-9de5-847c91ecb3f8',
                type: 'bulleted_list',
                properties: { title: [['vamos ver se funciona']] },
                contents: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
