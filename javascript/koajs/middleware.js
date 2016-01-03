// everything is a middleware
var koa = require('koa');
var app = koa();

// middleware to add a response header
app.use(function* (next) {
  var start = new Date();
  yield next;
  var ms = new Date() - start;
  this.set('X-Response-Time', ms + 'ms');
});

// middleware to set the response body
app.use(function* () {
  this.body = 'Hello World';
});

app.listen(3000);

// Execution flow is as follows:
// 1. request comes in at 3000
// 2. first middleware receive execution flow
// 3. new date object created and assigned to start
// 4. the execution flow yields to next middleware
// 5. second middleware sets body to 'Hello World'
// 6. since no more middleware after the second, on the stack, it goes back up the stack
// 7. first middleware receives flow and calculate response time
// 8. yields back to the top of the stack and Context is returned


