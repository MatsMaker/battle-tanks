import Phaser from '../Phaser.js';
const imageKey = 'tankBullet_E-100';

class Bullet {

  constructor(game, x, y, rotation, speed, data = {}) {
    this.game = game;
    this.imageKey = imageKey;

    this.shooter = data.shooter;

    this.sprite = new Phaser.Sprite(this.game, x, y, this.imageKey);
    this.game.physics.p2.enableBody(this.sprite);
    this.sprite.rotation = rotation;
    this.sprite.body.rotation = rotation;
    this.sprite.body.setZeroVelocity();
    this.sprite.body.moveForward(speed);
  }

  static setAttr(sprite, x, y, rotation, speed) {
    sprite.reset(x, y);
    sprite.body.reset(x, y);
    sprite.body.rotation = rotation;
    sprite.rotation = rotation;
    sprite.body.setZeroVelocity();
    sprite.body.moveForward(speed);

    return sprite;
  }

  static preload(game) {
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
}

export default Bullet;
