// module to emit events

// import the event emitter and util
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Car = function () {};

util.inherits(Car, EventEmitter); // Car is a subclass

Car.prototype.start = function() {
  var self = this;
  setTimeout(function() {
    self.flashCar();
  }, 2000);
  setTimeout(function() {
    self.stopCar();
  }, 4000);
  this.emit('start');
}

Car.prototype.flashCar = function() {
  this.emit('flash', 'Flashlights!');
}

Car.prototype.stopCar = function() {
  this.emit('stop');
}

module.exports = new Car();
