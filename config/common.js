const fs = require('fs');
const Path = require('path');

const readContentsFromFile = filePath => fs.readFileSync(Path.join(__dirname, filePath));

// read certificate and private
const serverOptions = {
  key: readContentsFromFile('secrets/localhost-privkey.pem'),
  cert: readContentsFromFile('secrets/localhost-cert.pem'),
  allowHTTP1: true // falls-back to http1 if client doesn't support http2
};

// define connection options
const connectionOptions = {
  port: '8000',
  routes: {
    files: { // to server static files from public directory
      relativeTo: Path.join(__dirname, '../public')
    }
  }
};

module.exports = {
  serverOptions,
  connectionOptions
};
