import Phaser from './Phaser.js';
import Boot from './states/Boot.js';
import Preloader from './states/Preloader.js';
import Level from './states/Level.js';

class TheGame {

  constructor(userId, reduser) {
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', Boot);
    this.game.data = {
      sync: reduser,
      userId: userId,
      tanks: []
    }
  }

  init() {
    return new Promise((resolve, reject) => {
      this.game.state.add('Preloader', Preloader);
      resolve({result: true});
    })
  }

  run() {
    return new Promise((resolve, reject) => {
      this.game.state.start('Preloader');
      resolve({result: true});
    })
  }

}

export default TheGame;
