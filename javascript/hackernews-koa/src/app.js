var koa = require('koa');
var app = koa();
var bodyParser = require('koa-body-parser');
var koaRouter = require('koa-router');
var router = koaRouter();
var errorHandler = require('./errorHandler');
var views = require('koa-views');
var serve = require('koa-static'); // for static files serving
var mount = require('koa-mount'); // namespacing all your static files

// connect to mongo db
require('./db')(app.env === 'development');

app.use(mount('/public', serve(__dirname + '/public')));

// interestingly all the html code is minified in jade
app.use(views('./views', { default: 'jade' }));
app.use(errorHandler);
app.use(bodyParser());

// routes set up
require('./routes/links')(router);
app.use(router.routes());
app.use(router.allowedMethods()); // respond to OPTIONS requests

module.exports = app;