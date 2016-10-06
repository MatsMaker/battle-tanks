import Phaser from '../Phaser.js';
import _Panzer from './_Panzer.js';
import Explosion from './Explosion.js';

const imageKeyFrame = 'tankBody_E-100-brown';
const imageKeyTurret = 'tankTurret_E-100-brown';
const physicsData = 'physicsData';

class Tank extends _Panzer {

  static preload(game) {
    super.preload(game);
    Explosion.preload(game);
  }

  constructor(game, player, data = {}) {
    super(game, player, data);
    this.respawnDelay = 5;
  }

  create(data) {
    return new Promise((resolve, reject) => {
      super.create(data).then(result => {
        if (result) {

          this.explosion = (!this.explosion)
            ? new Explosion(this.game)
            : this.explosion;

          resolve(result);
        } else {
          reject(false);
        }

      }).catch(err => {
        reject(err);
      });
    });
  }

  kill() {
    this.explosion.bigExplosion(this.frame.x, this.frame.y).then(result => {
      super.kill();
      this.game.time.events.add(Phaser.Timer.SECOND * this.respawnDelay, this.reset, this);
    }).catch(err => {
      console.error(err);
    });
  }

}

export default Tank;
