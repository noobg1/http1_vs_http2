const fs = require('fs');
const Path = require('path');

// read certificate and private
const serverOptions = {
  key: fs.readFileSync(Path.join(__dirname, 'secrets/localhost-privkey.pem')),
  cert: fs.readFileSync(Path.join(__dirname, 'secrets/localhost-cert.pem')),
  allowHTTP1: true
};

const connectionOptions = {
  port: '8000',
  routes: {
    cors: false,
    files: {
      relativeTo: Path.join(__dirname, '../public')
    }
  }
};

module.exports = {
  serverOptions,
  connectionOptions
};
