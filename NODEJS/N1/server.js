// CommonJS
// let http = require(`http`);

// ES Modules
import http from 'http';

const content = `World`;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello ${content}!`);
}).listen(8080);
