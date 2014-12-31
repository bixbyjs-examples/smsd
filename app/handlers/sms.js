exports = module.exports = function(transmit, logger) {

  function send(msg, next) {
    var m = msg.body;
    transmit(m.to, m.message, function(err) {
      if (err) { return next(err); }
      next();
    });
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
exports['@require'] = [ 'sms/transmit', 'logger' ];
