const { logger } = require('./logger');

function testingLogger(param) {
  logger.debug('debug message');
  logger.error('error message');
  //return param;
}

//console.log(testingLogger(true));

module.exports = { testingLogger };
