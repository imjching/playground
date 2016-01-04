
var fs = require('fs');
var koa = require('koa');

var app = module.exports = koa();

/**
 * Create the `GET /stream` route that streams this file.
 * In node.js, the current file is available as a variable `__filename`.
 */
// Create an app that returns a stream when the client requests /stream and
// a JSON body when the client requests /json.

app.use(function* (next) {
  if (this.request.path !== '/stream') return yield* next;

  this.type = 'application/javascript';
  this.body = fs.createReadStream(__filename);
});

/**
 * Create the `GET /json` route that sends `{message:'hello world'}`.
 */

app.use(function* (next) {
  if (this.request.path !== '/json') return yield* next;

  this.body = { message : 'hello world' };
});
