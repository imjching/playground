
// module to listen to events

var Car = require('./emitter');

var engineStopped = function() {
  console.log('Keep calm and drive on');
};

Car.addListener('start', function() {
  console.log('Car started.');
});

Car.addListener('stop', engineStopped);

// using alias
Car.on('flash', function(msg) {
  console.log(msg);
  Car.removeListener('stop', engineStopped);
});

Car.start();

// note that: straight from the EventEmitter source code:
// EventEmitter.prototype.on = EventEmitter.prototype.addListener;

// on is just an alias of addListener
