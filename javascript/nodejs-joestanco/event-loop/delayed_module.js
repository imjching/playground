// import the event emitter
var EventEmitter = require('events').EventEmitter;

module.exports = new EventEmitter();

// if we didn't have process next tick, the emitter will fire before the
// callback is registered
process.nextTick(function() {
  module.exports.message = 'hello there';
  module.exports.emit('ready');
});