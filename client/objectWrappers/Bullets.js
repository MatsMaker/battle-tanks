import Phaser from '../Phaser.js';

class BulletsGroup {

  constructor(game, quantity, options = {}) {
    this.game = game;
    this.options = {
      groupName: options.groupName || 'BulletsGroup',
      maxTimeLifeOfBullet: options.maxTimeLifeOfBullet || 60,
      autoDestroyOfBullet: options.autoDestroyOfBullet || true,
      onBeginContact: options.onBeginContact || function() {}
    };
    this.imageKey = 'tankBullet_E-100';

    this.group = this.game.add.group();
    this.group.name = options.groupName;
    this.group.enableBody = true;
    this.group.physicsBodyType = Phaser.Physics.P2JS;
  }

  preload() {
    this.game.load.image(this.imageKey, require('../assets/E-100/shot.png'), false);
  }

  initBullet(x, y, rotation, speed, bulletData) {
    return new Promise((resolve, reject) => {
      const maxTimeLife = this.options.maxTimeLifeOfBullet;
      const bullet = this.bullets.getFirstDead() || this.group.crete(x, y);
      bullet.reset(x, y);
      bullet.body.reset(x, y);
      bullet.body.rotation = rotation;
      bullet.rotation = rotation;
      bullet.body.setZeroVelocity();
      bullet.body.moveForward(speed);

      bullet.body.onBeginContact.add(this.bulletContactBy, bullet);
      if (this.options.autoDestroyOfBullet) {
        this.game.time.events.add(Phaser.Timer.SECOND * maxTimeLife, this.bulletDestroy, bullet);
      }
      bullet.onBeginContact.add(this.onBeginContact, bullet);
      resolve(bullet, this.group);
    });
  }

  bulletDestroy() {
    this.body.destroy();
  }

  onBeginContact(body, bodyB, shapeA, shapeB, equation) {
    if (body === null) { // fly out from map
      this.body.destroy();
    } else {
      this.options.onBeginContact(body, bodyB, shapeA, shapeB, equation);
    }
  }

}

export default BulletsGroup;
