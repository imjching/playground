
// While co supports promises, we could return thunks from functions, which
// are exactly like the traditional node-style callbacks with signatures of (err, res)
//
// For example take fs.readFile, we all know the signature is:
// fs.readFile(path, encoding, function(err, result){
//
// });
// To work with Co we need a function to return another function of the same signature:
// fs.readFile(path, encoding)(function(err, result){
//
// });
// Which basically looks like this:
//
// function read(path, encoding) {
//  return function(cb){
//    fs.readFile(path, encoding, cb);
//  }
// }
// read: https://www.npmjs.com/package/thunkify

var fs = require('fs');

/**
 * Create a yieldable version of `fs.stat()`:
 *
 *   app.use(function* () {
 *     var stats = yield exports.stat(__filename);
 *   })
 *
 * Hint: you can return a yieldable.
 */

exports.stat = function (filename) {
  return function (cb) {
    fs.stat(filename, cb);
  };
};

/**
 * Create a yieldable version of `fs.exists()`:
 *
 *
 *   app.use(function* () {
 *     var exists = yield exports.exists(__filename);
 *   })
 *
 * Note that `fs.exists()` simply wraps `fs.stat()`.
 * If `fs.stat()` does not return an error, then the file exists!
 *
 * Hint: don't use fs.exists() as it's not a proper callback.
 * In other words, the first argument returned in its callback
 * is not an error object, unlike node callbacks.
 */

exports.exists = function (filename) {
  return function (cb) {
    fs.stat(filename, function (err, stats) {
      if (err) { // contains error, file do not exist (false)
        cb(false, false);
      } else { // no error (null), file exists (true)
        cb(null, true);
      }
    });
  };
};
