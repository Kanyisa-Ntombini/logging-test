const { logger } = require('./logger');

function printLogsOnly() {
  logger.debug('debug message: printsLogsOnly function');
  logger.error('error message: printsLogsOnly function');
}
//printLogsOnly()

function returnBooleanValue(param) {
  logger.debug('debug message: returnBooleanValue function');
  logger.error('error message: returnBooleanValue function');
  return param;
}
//returnBooleanValue(true);

function throwErrorFunction() {
  logger.debug('debug message: throwErrorFunction');
  logger.error('error message: throwErrorFunction');
  throw new Error('An error as been thrown');
}
//throwErrorFunction();

module.exports = { printLogsOnly, returnBooleanValue, throwErrorFunction };
