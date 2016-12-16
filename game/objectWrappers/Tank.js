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

    this.mass = 1000;
    this.enginePower = 800000;
  }

  create(data) {
    return new Promise((resolve, reject) => {
      super
        .create(data)
        .then(result => {
          if (result.alive) {
            this.explosion = (!this.explosion)
              ? new Explosion(this.game)
              : this.explosion;

            this.interfaceInit();

            result.explosionInit = true;
            resolve(result);
          } else {
            result.explosionInit = false;
            resolve(result);
          }
        })
    });
  }

  interfaceInit() {
    const style = {
      fill: '#14FC40',
      fontSize: '16px'
    };
    this.interface = this
      .game
      .add
      .text(this.frame.x, this.frame.y, '', style);
    this.interface.anchor.x = 0.5;
    this.interface.anchor.y = 0;

    this.label = this
      .game
      .add
      .text(this.frame.x, this.frame.y, this.player, {fill: 'white',fontSize: '12px'});
    this.label.anchor.x = 0.5;
    this.label.anchor.y = 0.3;
  }

  _licalSyncInterface(result = {}) {
    this.label.x = this.frame.x;
    this.label.y = this.frame.y - 32;

    this.interface.x = this.frame.x;
    this.interface.y = this.frame.y - 32;
    let text = '';
    for (let i = 0; i < this.life; i++) {
      text += '-';
    }
    this.interface.text = text;
    this.interface.alive = result.alive;
  }

  _isNewCommand() {
    const newData = this.newData;
    if (newData.move) {
      const hadContacts = newData.bulletContacts.length > 0;
      return newData.move.left || newData.move.right || newData.move.forward || newData.move.back || newData.fire || hadContacts;
    } else {
      return false;
    }
  }

  _localSyncFrame(result = {}) {
    const newData = this.newData;
    this._licalSyncInterface(result);
    return super._localSyncFrame(newData, result);
  }

  kill() {
    this
      .explosion
      .bigExplosion(this.frame.x, this.frame.y)
      .then(result => {})
      .catch(err => {
        console.error(err);
      });
    return super.kill();
  }

  abort() {
    return new Promise((resolve, reject) => {
      return super
        .abort()
        .then(result => {
          this.interface.destroy();
          this.interface.destroy();
          this.label.destroy();
        });
    });
  }

  armorPenetration(bullet) {
    this
      .explosion
      .hit(bullet.sprite);
    bullet.destroy();
  }

}

export default Tank;
