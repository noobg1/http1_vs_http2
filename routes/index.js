const home = require('./home');
const healthCheck = require('./healthCheck');

module.exports = [
  ...home,
  ...healthCheck
];
