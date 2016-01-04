// script to connect to the database

var db = require('mongoose');
var config = require('./config');

module.exports = function(dev) {

  // w:1 flag as safe: true
  // http://stackoverflow.com/questions/14995602/how-can-i-know-if-connection-is-safe-true
  db.connect(config.db[dev ? 'mongo_url' : 'mongo_test_url'], { db: { w: 1 } }, function(err) {
    if (err) {
      return console.error('Mongoose connection error: ', err);
    }
    console.log('Connected to MongoDB');
  });
  db.set('debug', true);
};
