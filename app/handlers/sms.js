exports = module.exports = function(logger) {  

  function send(msg, next) {
    console.log('send SMS')
    console.log(msg.body)
    next();
  }

  function acknowledge(msg, next) {
    msg.ack();
  }
  
  function errorHandler(err, msg, next) {
    logger.error('Failed to send SMS: ' + err.message);
    logger.error(err.stack);
    msg.nack();
  }
  
  return [ send,
           acknowledge,
           errorHandler ];
}

/**
 * Component annotations.
 */
exports['@require'] = [ 'logger' ];
