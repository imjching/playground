
var koa = require('koa');
var jade = require('jade');
var path = require('path');

var app = module.exports = koa();

// Render homepage.jade using Jade's API.
// Because we use Jade's extends feature, you probably need to use
// Jade's asynchronous API as well as the .filename option.
// ref: http://jade-lang.com/api/

app.use(function* () {
  var filename = path.join(__dirname, 'homepage.jade');

  this.response.body = jade.renderFile(filename);
});
