const fs = require('fs');

function getEntryPoint() {
  if (fs.existsSync('./src')) return require('./src');
  return require('./lib');
}

module.exports = getEntryPoint();
