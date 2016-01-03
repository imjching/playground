// a simple script that runs a web server with koajs

// similar to express
var koa = require('koa');
var app = koa();

// attach handler to middleware
app.use(function *() {
  // koa uses this.
  this.body = 'Hello World';
});

app.listen(3000);