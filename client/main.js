require('./styles/main.scss');
import TheGame from './TheGame.js';

const theGame = new TheGame();

theGame.init().then(result => {
  return theGame.run()
}).then(result => {
  console.log('the game is run');
}).catch(error => {
  console.error(error);
});

/*
//
*/

// var shoe = require('shoe'); var dnode = require('dnode');
//
// var stream = shoe('/dnode'); var d = dnode();
//
// d.on('remote', remote => {
//
//   remote.transform('connect', function (s) {     console.log(s);   });
//
// });
//
// d.pipe(stream).pipe(d);

var io = require('socket.io-client');
var socket = io('http://localhost:8000');
socket.on('connect', function (e) {
  console.log('connect', e);
});
socket.on('event', function (data) {
  console.log(data);
});
socket.on('disconnect', function (e) {
  console.log(e);
});
