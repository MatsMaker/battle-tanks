import MainMenu from './MainMenu.js';
import AnimatedDots from '../objectWrappers/texts/AnimatedDots.js';

class Preloader {

  init() {
    this.stage.setBackgroundColor('#F5F5DC');

    this.animatedDots = new AnimatedDots(this.game, this.game.world.centerX, this.game.world.centerY, '')
    this.animatedDots.setAnchor('centration');
  }

  preload() {
    this.load.image('kdeWallpapers', require('../assets/covers/kde-wallpapers.png'));

    this.load.spritesheet('btn_greenGo', require('../assets/buttons/green-go.png'), 150, 150);

    this.state.add('MainMenu', MainMenu);
  }

  loadUpdate() {
    this.animatedDots.nexAnimatinStep();
  }

  create() {
    this.state.start('MainMenu');
  }

}

export default Preloader;
