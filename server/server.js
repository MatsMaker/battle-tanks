const shoe = require('shoe');
const http = require('http');
const express = require('express');
const dnode = require('dnode');

const PORT = 8000;

const app = express();

app.use(express.static(__dirname + '/../static'));

const server = http.createServer(app);

server.listen(PORT);
console.log('listen port: ' + PORT);

const sock = shoe(stream => {
  var d = dnode({
    transform: (s, cb) => {
      var res = s.toUpperCase() + 'ED!!!';
      cb(res);
    }
  });
  d.pipe(stream).pipe(d);
});

sock.install(server, '/dnode');
