require('./styles/main.scss');
import TheGame from './TheGame.js';
import reduser from './reduser/index.js';

let theGame;

// const authData = localStorage.getItem('auth');

reduser.connect().then(response => {
  return reduser.makeOne('auth', {auth: null});
}).then(response => {
  const userId = response.data.userId;
  // localStorage.setItem('auth', userId);
  theGame = new TheGame(userId, reduser);
  return theGame.init();
}).then(result => {
  return theGame.run();
}).then(result => {}).catch(err => {
  console.error(err);
});
