require('./styles/main.scss');
import TheGame from './TheGame.js';
import Reduser from './reduser/index.js';

let theGame;

const reduser = new Reduser('http://192.168.0.28:8000/game');

reduser.connect().then(response => {
  return reduser.makeOne('auth', {});
}).then(response => {
  const userId = response.data.userId;
  theGame = new TheGame(userId, reduser);
  return theGame.init();
}).then(result => {
  return theGame.run();
}).then(result => {}).catch(err => {
  console.error(err);
});
