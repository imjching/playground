var koa = require('koa');
var app = koa();
var bodyParser = require('koa-body-parser');
var koaRouter = require('koa-router');
var router = koaRouter();

// connect to mongo db
require('./src/db');

// body parser
app.use(bodyParser());

// routes set up
require('./src/routes/links')(router);
app.use(router.routes());
app.use(router.allowedMethods()); // responding to OPTIONS requests

app.listen(3000);
console.log('Koa app listening on port 3000');