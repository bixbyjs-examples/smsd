/**
 * Data store.
 *
 * This component provides a data store configured with support for querying and
 * persisting records used by NTS.
 *
 * @return {DataStore}
 */

exports = module.exports = function(settings) {
  var options = settings.get('sms');
  
  switch (options.gateway) {
  case 'mock':
    return require('./_transmit/mock')();
  default:
    throw new Error('Unsupported SMS gateway: ' + options.type);
  }
}

/**
 * Component annotations.
 */
exports['@singleton'] = true;
exports['@require'] = [ 'settings' ];
