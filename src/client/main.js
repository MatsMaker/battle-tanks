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
