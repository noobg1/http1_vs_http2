module.exports = [
  {
    method: 'GET',
    path: '/{param*}',
    config: {
      description: 'Serves static content for base (/) route',
      notes: 'Serves static content for base (/) route',
      tags: ['api'],
      handler: {
        directory: {
          path: '.',
          redirectToSlash: true,
          index: true
        }
      }
    }
  }
];
