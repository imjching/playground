// simple http server

var http = require('http');

var httpHandler = function (req, res) {
  res.writeHead(200, { 'Content-Type' : 'text/plain' } );
  res.end('Hello World');
}

var app = http.createServer(httpHandler);

app.listen(3000);
