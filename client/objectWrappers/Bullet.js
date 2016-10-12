import Phaser from '../Phaser.js';
const imageKey = 'tankBullet_E-100';
import Explosion from './Explosion.js';

class Bullet {

  constructor(game, x, y, rotation, speed, data = {}) {
    this.game = game;
    this.imageKey = imageKey;

    this.shooter = data.shooter;

    this.sprite = new Phaser.Sprite(this.game, x, y, this.imageKey);
    this.game.physics.p2.enableBody(this.sprite);
    this.sprite.anchor.set(0.5, 0.2);
    this.sprite.body.setCircle(3);
    this.sprite.rotation = rotation;
    this.sprite.body.mass = 30;
    this.sprite.body.damping = 0.5;
    this.sprite.body.angularDamping = 0.5;
    this.sprite.body.rotation = rotation;
    this.sprite.body.setZeroVelocity();
    this.sprite.body.moveForward(speed);
    // this.sprite.body.debug = true; // debug

    this.explosion = new Explosion(this.game);
  }

  static setAttr(sprite, x, y, rotation, speed) {
    sprite.reset(x, y);
    sprite.body.reset(x, y);
    sprite.body.rotation = rotation;
    sprite.rotation = rotation;
    sprite.body.setZeroVelocity();
    sprite.body.moveForward(speed * 10);

    return sprite;
  }

  static preload(game) {
    Explosion.preload(game);
    game.load.image(imageKey, require('../assets/E-100/shot.png'), 1);
  }

  static getImageKey() {
    return imageKey;
  }

  destroy() {
    if (this.sprite.parent) {
      this.sprite.parent.remove(this.sprite, true);
    } else {
      this.sprite.alive = false;
      this.sprite.destroy();
    }
  }

  drop() {
    if (this.sprite.alive) {
      this.explosion.zilch(this.sprite);
      this.destroy();
    }
  }

}

export default Bullet;
