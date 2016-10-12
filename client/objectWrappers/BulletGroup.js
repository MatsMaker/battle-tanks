import _ from 'underscore';
import Phaser from '../Phaser.js';
import Bullet from './Bullet.js';

const imageKey = Bullet.getImageKey();

class BulletsGroup {

  constructor(game) {
    this.game = game;
    this.imageKey = imageKey;
  }

  static preload(game) {
    Bullet.preload(game);
  }

  create(options) {
    this.options = _.extend({
      groupName: 'BulletsGroup',
      maxTimeLifeOfBullet: 1,
      autoDestroyOfBullet: true,
      onBulletContact: function (bullet, body, bodyB, shapeA, shapeB, equation) {
        console.log(bullet, body, bodyB, shapeA, shapeB, equation);
      }
    }, options);
    this.group = this.game.add.group();
    this.group.name = this.options.groupName;
  }

  initBullet(x, y, rotation, speed, data) {
    const self = this;
    const maxTimeLife = this.options.maxTimeLifeOfBullet;
    const bullet = new Bullet(this.game, x, y, rotation, speed, data);
    this.group.add(bullet.sprite);

    if (this.options.autoDestroyOfBullet) {
      this.game.time.events.add(Phaser.Timer.SECOND * maxTimeLife, bullet.drop, bullet);
    }
    bullet.sprite.body.onBeginContact.add((body, bodyB, shapeA, shapeB, equation) => {
      this.onBulletContact(bullet, body, bodyB, shapeA, shapeB, equation);
    }, this);

    return this.group.getChildIndex(bullet.sprite);
  }

  onBulletContact(bullet, body, bodyB, shapeA, shapeB, equation) {
    if (body == null) { // fly out from map
      bullet.destroy();
    } else {
      this.options.onBulletContact(bullet, body, bodyB, shapeA, shapeB, equation);
    }
  }

}

export default BulletsGroup;
