/**
 * Work queues.
 */
exports = module.exports = function(IoC) {
  
  this.work('message/sms', IoC.create('handlers/sms'));
  
}
/*
 * DI annotations.
 */
exports['@require'] = [ '$container' ];
