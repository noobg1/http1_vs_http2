module.exports = [
  {
    method: 'GET',
    path: '/ping',
    config: {
      description: 'Just to ping',
      notes: 'To check if app is live or not',
      tags: ['api'],
      handler: (request, reply) => {
        reply('pong');
      }
    }
  }
];
