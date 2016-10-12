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
  }

  create(data) {
    return new Promise((resolve, reject) => {
      super.create(data).then(result => {
        if (result.alive) {
          this.explosion = (!this.explosion)
            ? new Explosion(this.game)
            : this.explosion;
          result.explosionInit = true;
          resolve(result);
        } else {
          result.explosionInit = false;
          resolve(result);
        }
      })
    });
  }

  _isNewCommand() {
    const newData = this.newData;
    return newData.move.left || newData.move.right || newData.move.forward || newData.move.back || newData.fire;
  }

  _localSyncFrame(result = {}) {
    const newData = this.newData;
    if (this._isNewCommand(newData)) {
      return this.moveLocalSync(newData, result);
    } else {
      return super._localSyncFrame(newData, result);
    }
  }

  moveLocalSync(result = {}) {
    const newData = this.newData;
    return new Promise((resolve, reject) => {
      if (result.alive) {
        if (newData.move.left) {
          this.frame.body.rotateLeft(50);
        } else if (newData.move.right) {
          this.frame.body.rotateRight(50);
        } else {
          this.frame.body.setZeroRotation();
        }
        if (newData.move.forward) {
          this.frame.body.thrust(800000);
        } else if (newData.move.back) {
          this.frame.body.reverse(250000);
        }
        result.moveSync = true;
        resolve(result);
      } else {
        result.moveSync = false;
        resolve(result);
      }
    });
  }

  kill() {
    this.explosion.bigExplosion(this.frame.x, this.frame.y).then(result => {}).catch(err => {
      console.error(err);
    });
    return super.kill();
  }

  hit(point) {
    this.explosion.hit(point);
    return super.hit(point);
  }

}

export default Tank;
