import StartMenu from '../objectWrappers/Menu.js';
import Level from './Level.js';
import Phaser from '../Phaser.js';

class MainMenu {

  constructor() {
    this.background;
  }

  init() {
    this.state.add('Level', Level);
    this.load.image('kdeWallpapers', require('../assets/covers/kde-wallpapers.png'));
  }

  preload() {
  }

  create() {
    this.background = this.game.add.sprite(-80, -80, 'kdeWallpapers');
    this.background.scale.set(0.5);

    this.menu = new StartMenu(this.game);

    this.menu.onStartGame = (button) => {
      this.state.start('Level');
    }
  }

}

export default MainMenu;
