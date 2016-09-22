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

var shoe = require('shoe');
var dnode = require('dnode');

var stream = shoe('/dnode');
var d = dnode();
d.on('remote', function (remote) {
  remote.transform('connect', function (s) {
    console.log(s);
  });
});
d.pipe(stream).pipe(d);
