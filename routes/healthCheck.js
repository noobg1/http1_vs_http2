module.exports = [
  {
    method: 'GET',
    path: '/ping',
    handler: (request, reply) => {
      reply('pong');
    }
  }
];
