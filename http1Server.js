const Hapi = require('hapi');
const server = new Hapi.Server();
const Inert = require('inert');
const routes = require('./routes/index'); 
const {connectionOptions } = require('./config/common');

// create a connection object with listener and other options
server.connection({
  ...connectionOptions,
  port: '8002'
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
