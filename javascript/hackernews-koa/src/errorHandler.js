// by using this pattern for error handling, we can avoid the use of (err, res)
// calls like in node.js as well as the .error and .catch for Promises

// plain old try-catch. we can just throw JavaScript errors to change the
// execution flow, if there are any
module.exports = function* (next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
};
