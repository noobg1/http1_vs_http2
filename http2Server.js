const Hapi = require('hapi');
const Http2 = require('http2');
const server = new Hapi.Server();
const Inert = require('inert');
const routes = require('./routes/index'); 
const { serverOptions, connectionOptions } = require('./config/common');

// create http2 secure server listener
const listener = Http2.createSecureServer(serverOptions);

// create a connection object with listener and other options
server.connection({
  listener,
  ...connectionOptions
});

server.register([{
  register: Inert
}]);

// define routes
server.route([...routes]);

// start server
server.start(err => {
  if (err) console.error(err)
  console.log(`Started ${server.connections.length} connections`)
});
