import Phaser from '../Phaser.js';

const imageKeyBody = 'tankBody_E-100';
const imageKeyTurret = 'tankTurret_E-100';
const imageKeyBullet = 'tankBullet_E-100';

class Tank {

  constructor(game, player, data) {
    this.game = game;
    this.data = data || {};
    this.player = player;

    this.source;
    this.turret;
    this.bullets;

    this.imageKeyBody = imageKeyBody;
    this.imageKeyTurret = imageKeyTurret;
  }

  static preload(game) {
    game.load.image(imageKeyBody, require('../assets/E-100/body2.png'), 1);
    game.load.image(imageKeyTurret, require('../assets/E-100/turret.png'), 1);
    game.load.image(imageKeyBullet, require('../assets/E-100/shot.png'), false);
  }

  create() {
    this.cursors = this.game.input.keyboard.createCursorKeys();

    const initPosition = {
      x: this.data.x || this.game.world.centerX,
      y: this.data.y || this.game.world.centerY
    };

    this.source = this.game.add.sprite(initPosition.x, initPosition.y, this.imageKeyBody);
    this.turret = this.game.add.sprite(initPosition.x, initPosition.y, this.imageKeyTurret);

    this.source.scale.set(0.3, 0.3);
    this.turret.scale.set(0.3, 0.3);
    this.source.anchor.set(0.5, 0.5);
    this.turret.anchor.set(0.3, 0.5);
    this.turretRadius = 30; // rotating turret radius

    this.game.physics.p2.enable(this.source);
    this.turret.angle = this.data.turretRotation || 0;
    this.source.body.angular = this.data.angle || 0;

    this.source.body.mass = 1000;
    this.source.body.damping = 0.999;
    this.source.body.angularDamping = 0.999;
    this.source.body.inertia = 1000;
    this.source.body.sleepSpeedLimit = 1400;
    this.source.body.dynamic = true;

    this.bullets = this.game.add.group();
    this.bullets.enableBody = true;
    // this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
    this.bullets.physicsBodyType = Phaser.Physics.P2JS;
    this.bullets.createMultiple(100, imageKeyBullet, 0, false);
    // this.bullets.setAll('anchor.x', 0.5);
    // this.bullets.setAll('anchor.y', 0.5);
    // this.bullets.setAll('body.velocity', 0);
    // this.bullets.setAll('body.velocity', 0);
    // this.bullets.setAll('body.angularVelocity', 0);
    //  this.bullets.setAll('outOfBoundsKill',
    // true); this.bullets.setAll('checkWorldBounds', true);
  }

  destroy() {
    this.source.body.destroy();
    this.source.destroy();
    this.turret.destroy();
  }

  coorOutBullet() {
    // http://flashgamedev.ru/viewtopic.php?f=6&t=3948
    const x0 = this.turret.x;
    const y0 = this.turret.y - this.turretRadius;

    const radians = this.turret.rotation + 1.5708;

    const rx = x0 - this.turret.x;
    const ry = y0 - this.turret.y;
    const c = Math.cos(radians);
    const s = Math.sin(radians);

    return {
      x: this.turret.x + rx * c - ry * s,
      y: this.turret.y + rx * s + ry * c,
      rotation: radians
    }
  }

  fire(target) {
    let bullet = this.bullets.getFirstDead();
    const coorInitBullet = this.coorOutBullet();
    bullet.reset(coorInitBullet.x, coorInitBullet.y);
    bullet.body.reset(coorInitBullet.x, coorInitBullet.y);
    bullet.body.rotation = coorInitBullet.rotation;
    bullet.rotation = coorInitBullet.rotation;
    bullet.body.setZeroVelocity();
    // bullet.body.reset(this.turret.x, this.turret.y);
    bullet.body.moveForward(800);
    // bullet.rotation = this.game.physics.arcade.moveToObject(bullet, target, 600);
  }

  update(remouteTankData) {
    if (this.player === this.game.data.userId) {
      let fire = false;
      if (this.cursors.left.isDown) {
        this.source.body.rotateLeft(50);
      } else if (this.cursors.right.isDown) {
        this.source.body.rotateRight(50);
      } else {
        this.source.body.setZeroRotation();
      }
      if (this.cursors.up.isDown) {
        this.source.body.thrust(800000);
      } else if (this.cursors.down.isDown) {
        this.source.body.reverse(250000);
      }

      this.turret.rotation = this.game.physics.arcade.angleToPointer(this.turret);
      this.turret.x = this.source.body.x;
      this.turret.y = this.source.body.y;

      if (this.game.input.mousePointer.leftButton.isDown) {
        fire = {
          x: this.game.input.x + this.game.camera.x,
          y: this.game.input.y + + this.game.camera.y
        };
        this.fire(fire);
      }

      this.game.data.reduser.makeOne('updateTank', {
        tank: {
          player: this.player,
          x: this.source.body.x,
          y: this.source.body.y,
          angle: this.source.body.angle,
          turretRotation: this.turret.rotation,
          fire: fire
        }
      }).then(response => {}).catch(err => {
        console.error(err);
      })
    } else if (remouteTankData) {
      this.source.body.x = remouteTankData.x;
      this.source.body.y = remouteTankData.y;
      this.source.body.angle = remouteTankData.angle;
      this.turret.rotation = remouteTankData.turretRotation;
      if (remouteTankData.fire) {
        this.fire(remouteTankData.fire)
      }
    }
    this.turret.x = this.source.body.x;
    this.turret.y = this.source.body.y;
  }

}

export default Tank;
