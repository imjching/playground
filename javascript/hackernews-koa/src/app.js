var koa = require('koa');
var app = koa();
var bodyParser = require('koa-body-parser');
var koaRouter = require('koa-router');
var router = koaRouter();
var errorHandler = require('./errorHandler');
var views = require('koa-views');

// connect to mongo db
require('./db');

app.use(views('./views', { default: 'jade' }));
app.use(errorHandler);
app.use(bodyParser());

// routes set up
require('./routes/links')(router);
app.use(router.routes());
app.use(router.allowedMethods()); // respond to OPTIONS requests

module.exports = app;