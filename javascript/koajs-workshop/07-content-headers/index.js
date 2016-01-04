
var koa = require('koa');

var app = module.exports = koa();

// Create an app that checks the Content-Type of the request.
// If it's application/json, return {message: 'hi!'} with appropriate content
// headers. Otherwise, return ok as a string.
// https://github.com/koajs/koa/blob/master/docs%2Fapi%2Fcontext.md

app.use(function* () {
  if (this.is('application/json')) {
    this.type = 'application/json';
    this.body = { message : 'hi!' };
  } else {
    this.body = 'ok';
  }
})
