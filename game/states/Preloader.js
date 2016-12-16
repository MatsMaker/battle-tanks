import Level from './Level.js';
import AnimatedDots from '../objectWrappers/texts/AnimatedDots.js';

class Preloader {

  init() {
    this.stage.setBackgroundColor('#F5F5DC');

    this.animatedDots = new AnimatedDots(this.game, this.game.world.centerX, this.game.world.centerY, '')
    this.animatedDots.setAnchor('centration');
  }

  preload() {
    this.state.add('Level', Level);
  }

  loadUpdate() {
    this.animatedDots.nexAnimatinStep();
  }

  create() {
    this.state.start('Level');
  }

}

export default Preloader;
