const fetch = require('node-fetch');

const NOTION_API_PATH = 'https://www.notion.so/api/v3/';

module.exports = async function (action, body) {
  const res = await fetch(NOTION_API_PATH + action, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return res.json();
};
