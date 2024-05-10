//Create web server
//Create a web server that listens on port 3000 and serves a static page from the public directory.

var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res) {
  console.log('request was made: ' + req.url);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/public/index.html').pipe(res);
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/public/contact.html').pipe(res);
  } else if (req.url === '/api/ninjas') {
    var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/public/404.html').pipe(res);
  }
});

server.listen(3000)