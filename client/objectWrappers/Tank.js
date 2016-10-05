import _Panzer from './_Panzer.js';

const imageKeyFrame = 'tankBody_E-100-brown';
const imageKeyTurret = 'tankTurret_E-100-brown';
const physicsData = 'physicsData';


class Tank extends _Panzer {

  static preload(game) {
    game.load.image(imageKeyFrame, require('../assets/E-100/brown/body2.png'), 1);
    game.load.image(imageKeyTurret, require('../assets/E-100/brown/turret.png'), 1);

    game.load.physics(physicsData, require('file!../assets/E-100/E-100.json'));
  }

  constructor(game, player, data = {}) {
    super(game, player, data);
    this.imageKeyFrame = imageKeyFrame;
    this.imageKeyTurret = imageKeyTurret;
  }
}

export default Tank;
