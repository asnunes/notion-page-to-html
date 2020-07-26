# Readme

# Notion Page To HTML

NodeJS tool to convert a publics notion pages to HTML.

This tool is based on [Potion](https://github.com/benborgers/potion), an open-source reverse-engineered API for [Notion](http://notion.so).

## Supported features

Most of native notion block are currently supported:

- Headings
- Text With Decorations
- Quote
- Image
- YouTube Videos
- Code
- Math Equations
- To-do
- Checkbox
- Bulleted Lists
- Numbered Lists
- Divider

Toggle lists, embeds and nested blocks are not supported yet.

## Basic Usage

Install it using npm or yarn

```bash
npm install notion-page-to-html --save
```

Import lib inside your code and give link to a public notion page and get full html

```jsx
const NotionPageToHtml = require('notion-page-to-html');

// ...
NotionPageToHtml.parse(
  'https://www.notion.so/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f'
);
```

If you want to load only html body, without any css or scripts to highlight code or style math equations, you can pass false as second argument to parse method

```jsx
NotionPageToHtml.parse(
  'https://www.notion.so/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f',
  false
);
```
