exports = module.exports = function() {
  
  return function send(phone, message, cb) {
    console.log(phone + ': ' + message);
    return cb();
  }
}
