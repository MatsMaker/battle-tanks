import Tank from './Tank.js';

const imageKeyFrame = 'tankBody_E-100-brown';
const imageKeyTurret = 'tankTurret_E-100-brown';
const physicsData = 'physicsData';

class EnemyTank extends Tank {

  static preload(game) {
    super.preload(game);

    game.load.image(imageKeyFrame, require('../assets/E-100/brown/body2.png'), 1);
    game.load.image(imageKeyTurret, require('../assets/E-100/brown/turret.png'), 1);

    game.load.physics(physicsData, require('file!../assets/E-100/E-100.json'));
  }

  // kill() {
  //   console.warn(this.player + ' died');
  //   return super.kill();
  // }

  constructor(game, player, data = {}) {
    super(game, player, data);
    this.imageKeyFrame = imageKeyFrame;
    this.imageKeyTurret = imageKeyTurret;
  }
}

export default EnemyTank;
