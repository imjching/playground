
var koa = require('koa');

/**
 * This is a promisified version of zlib's gzip function,
 * allowing you to simply `yield` it without "thunkifying" it.
 *
 *   app.use(function* (next) {
 *     this.response.set('Content-Encoding', 'gzip');
 *     this.response.body = yield gzip('something');
 *   })
 */
// Using this.request.acceptsEncodings(), either send hello world gzipped
// or not gzipped (identity). For the purposes of this test, always set the
// Content-Encoding header, even if it's just identity.

var gzip = require('mz/zlib').gzip;

var app = module.exports = koa();

app.use(function* () {
  if (!this.acceptsEncodings('gzip')) {
    this.response.set('Content-Encoding', 'identity');
    this.body = 'hello world';
  } else {
    this.response.set('Content-Encoding', 'gzip');
    this.body = yield gzip('hello world');
  }
})
