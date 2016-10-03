import _ from 'underscore';
import Phaser from '../Phaser.js';

const imageKey = 'tankBullet_E-100';

class BulletsGroup {

  constructor(game) {
    this.game = game;
    this.imageKey = imageKey;
  }

  static preload(game) {
    game.load.image(imageKey, require('../assets/E-100/shot.png'), 1);
  }

  create(options) {
    this.options = _.extend({
      groupName: 'BulletsGroup',
      maxTimeLifeOfBullet: 60,
      autoDestroyOfBullet: true,
      onBulletContact: function (bullet, body, bodyB, shapeA, shapeB, equation) {
        console.log(bullet, body, bodyB, shapeA, shapeB, equation);
      }
    }, options);
    this.group = this.game.add.group();
    this.group.name = this.options.groupName;
    this.group.enableBody = true;
    this.group.physicsBodyType = Phaser.Physics.P2JS;
    this.group.createMultiple(50, this.imageKey, 0, false);
  }

  initBullet(x, y, rotation, speed) {
    const self = this;
    // return new Promise((resolve, reject) => {
    const maxTimeLife = this.options.maxTimeLifeOfBullet;
    let bullet = this.group.getFirstDead() //|| this.group.add(this.imageKey, false);

    bullet.reset(x, y);
    bullet.body.z = 2000;
    bullet.body.reset(x, y);
    bullet.body.rotation = rotation;
    bullet.rotation = rotation;
    bullet.body.setZeroVelocity();
    bullet.body.moveForward(speed);

    if (this.options.autoDestroyOfBullet) {
      this.game.time.events.add(Phaser.Timer.SECOND * maxTimeLife, this.bulletDestroy, bullet);
    }
    bullet.body.onBeginContact.add((body, bodyB, shapeA, shapeB, equation) => {
      this.onBulletContact(bullet, body, bodyB, shapeA, shapeB, equation);
    }, this);

    return this.group.getChildIndex(bullet);
  }

  bulletDestroy(){
    this.destroy();
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
