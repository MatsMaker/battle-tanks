require('./styles/main.scss');
import TheGame from './TheGame.js';

let theGame;

let isAuth = false;

var io = require('socket.io-client');
var socket = io('http://localhost:8000');

const auth = localStorage.getItem('auth') || new Date().getTime();

socket.emit('auth', {auth: auth});

socket.on('auth', response => {
  if (auth == response.userId) {
    localStorage.setItem('auth', response.userId);
    theGame = new TheGame(response.userId, socket);
    theGame.init().then(result => {
      return theGame.run();
    }).then(result => {
      console.log('the game is run');
    }).catch(error => {
      console.error(error);
    });
  }
});

socket.on('disconnect', function (e) {
  console.log(e);
});
