import StartMenu from '../objectWrappers/Menu.js';
import Level1 from './Level1.js';
import Tank from '../objectWrappers/Tank.js';
import Phaser from '../Phaser.js';

class MainMenu {

  constructor() {
    this.background;
  }

  init() {
    this.state.add('Level1', Level1);
  }

  preload() {
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    Tank.preload(this.game);
  }

  create() {
    this.background = this.game.add.sprite(-80, -80, 'kdeWallpapers');
    this.background.scale.set(0.5);

    this.menu = new StartMenu(this.game);

    this.menu.onStartGame = (button) => {
      this.game.data.socket.emit('startGame', {userId: this.game.data.userId});
    }

    this.game.data.socket.on('startGame', response => {
      if (response.userId == this.game.data.userId) {
        this.game.data.tanks = response.data.tanks;
        this.state.start('Level1');
      }
    });
  }

}

export default MainMenu;
