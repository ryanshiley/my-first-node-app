var http = require('http');
var port = 8080;

http.createServer( function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end("My fist node app");
}).listen(port);

console.log('server running on port ' + port);
