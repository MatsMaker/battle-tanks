import Phaser from '../Phaser.js';

const imageKeyBody = 'tankBody_E-100';
const imageKeyTurret = 'tankTurret_E-100';
const imageKeyBullet = 'tankBullet_E-100';
const physicsData = 'physicsData';
const tankExplosion = 'tankExplosion';

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

    game.load.spritesheet(tankExplosion, require('../assets/tilemaps/explosion_ring_ew_spritesht.png'), 254, 254);

    game.load.physics(physicsData, require('file!../assets/E-100/E-100.json'));
  }

  _explosion() {
    this.explosion = this.game.add.sprite(this.source.body.x, this.source.body.y, tankExplosion);
    this.explosion.scale.set(0.5, 0.5);
    let play = this.explosion.animations.add('play', [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ], 10);
    this.explosion.anchor.set(0.5, 0.5);
    play.killOnComplete = true;
    play.play();
    setTimeout(() => {
      this.explosion.destroy();
    }, 1500)
  }

  _controller() {
    return {
      player: this.player,
      x: this.source.body.x,
      y: this.source.body.y,
      angle: this.source.body.angle,
      turretRotation: this.turret.rotation,
      fire: this.game.input.mousePointer.leftButton.isDown,
      target: {
        x: this.game.input.x + this.game.camera.x,
        y: this.game.input.y + this.game.camera.y
      },
      move: {
        left: this.cursors.left.isDown,
        right: this.cursors.right.isDown,
        forward: this.cursors.up.isDown,
        back: this.cursors.down.isDown
      }
    }
  }

  _baseLocalSync(remouteTankData) {
    if (remouteTankData.move.left != this.cursors.left.isDown || remouteTankData.move.right != this.cursors.right.isDown || remouteTankData.move.forward != this.cursors.up.isDown || remouteTankData.move.back != this.cursors.down.isDown || this.game.input.mousePointer.leftButton.isDown != remouteTankData.fire) {
      this.source.body.x = remouteTankData.x;
      this.source.body.y = remouteTankData.y;
      this.source.body.angle = remouteTankData.angle;
    }
    this.turret.x = this.source.body.x;
    this.turret.y = this.source.body.y;
  }

  _hostLocalSync() {
    const contrroller = this._controller();
    this.game.data.sync.makeOne('updateTank', {tank: contrroller}).then(response => {}).catch(err => {
      console.error(err);
    });
  }

  _moveLovalSync(remouteTankData) {
    if (remouteTankData.move.left) {
      this.source.body.rotateLeft(50);
    } else if (remouteTankData.move.right) {
      this.source.body.rotateRight(50);
    } else {
      this.source.body.setZeroRotation();
    }
    if (remouteTankData.move.forward) {
      this.source.body.thrust(800000);
    } else if (remouteTankData.move.back) {
      this.source.body.reverse(250000);
    }
    this.turret.rotation = remouteTankData.turretRotation;
    if (remouteTankData.fire) {
      this.fire(remouteTankData.target);
    }
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
    this.turretRadius = 33; // rotating turret radius

    this.game.physics.p2.enableBody(this.source);

    this.source.body.clearShapes();
    this.source.body.loadPolygon(physicsData, 'body2'); // scale 0.3

    this.turret.angle = this.data.turretRotation || 0;
    this.source.body.angular = this.data.angle || 0;

    this.source.body.mass = 1000;
    this.source.body.damping = 0.999;
    this.source.body.angularDamping = 0.999;
    this.source.body.inertia = 1000;
    this.source.body.sleepSpeedLimit = 1400;
    this.source.body.dynamic = true;
    // this.source.body.debug = true; // debug

    this.bullets = this.game.add.group();
    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.P2JS;
    this.bullets.createMultiple(5, imageKeyBullet, 0, false);

    this.fireRate = 500;
    this.nextFire = 0;
    this.alive = true;

    this.source.body.onBeginContact.add(this.contactBy, this);
  }

  abort() {
    setTimeout(() => {
      this.turret.destroy();
      setTimeout(() => {
        this.source.body.destroy();
        setTimeout(() => {
          this.source.destroy();
          setTimeout(() => {
            this.bullets.destroy();
          }, 100);
        }, 100);
      }, 100);
    }, 100)
  }

  kill() {
    this._explosion();
    // this.abort();
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
    if (!this.alive)
      return;
    if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0) {
      this.nextFire = this.game.time.now + this.fireRate;

      let bullet = this.bullets.getFirstDead();
      const coorInitBullet = this.coorOutBullet();
      bullet.reset(coorInitBullet.x, coorInitBullet.y);
      bullet.body.z = 200;
      bullet.body.reset(coorInitBullet.x, coorInitBullet.y);
      bullet.body.rotation = coorInitBullet.rotation;
      bullet.rotation = coorInitBullet.rotation;
      bullet.body.setZeroVelocity();
      bullet.body.moveForward(800);

      bullet.body.onBeginContact.add(this.bulletContactBy, bullet);
    }
  }

  isOwner(tank) {
    return this.game.data.userId == tank.player;
  }

  bulletContactBy(body, bodyB, shapeA, shapeB, equation) {
    this.exists = false;
    this.alive = false;
  }

  contactBy(body, bodyB, shapeA, shapeB, equation) {
    console.info(body, bodyB, shapeA, shapeB, equation);
    if (body && body.sprite.key == 'tankBullet_E-100') {
      this.kill();
    }
  }

  update(remouteTankData) {
    const HOST = this.isOwner(remouteTankData);

    this._baseLocalSync(remouteTankData);
    this._moveLovalSync(remouteTankData);
    if (HOST) {
      this.turret.rotation = this.game.physics.arcade.angleToPointer(this.turret);
      this._hostLocalSync();
    }

    console.log(this.game.world.children.length);
  }

}

export default Tank;
