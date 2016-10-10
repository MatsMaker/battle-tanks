import _ from 'underscore';
import Phaser from '../Phaser.js';
import Bullet from './Bullet.js';

const imageKeyFrame = 'tankBody_E-100';
const imageKeyTurret = 'tankTurret_E-100';
const physicsData = 'physicsData';

class _Panzer {

  constructor(game, player, data) {
    this.game = game;
    this.data = _.extend({}, data);
    this.turretRotation = data.turretRotation || 0;
    this.initBullet = data.initBullet || function (x, y, rotation, speed, bulletData) {
      console.error('need set init bullet fn');
    };
    this.player = player;

    this.bulletContacts = [];

    this.frame;
    this.turret;

    this.imageKeyFrame = imageKeyFrame;
    this.imageKeyTurret = imageKeyTurret;
    this.physicsData = physicsData;
  }

  set alive(value) {
    this.life = (value)
      ? 5
      : 0
  }

  get alive() {
    return this.life > 0;
  }

  isOwnerFrameBody(body) {
    return this.frame.body.id === body.id;
  }

  static preload(game) {
    game.load.image(imageKeyFrame, require('../assets/E-100/body2.png'), 1);
    game.load.image(imageKeyTurret, require('../assets/E-100/turret.png'), 1);

    game.load.physics(physicsData, require('file!../assets/E-100/E-100.json'));
  }

  _controller() {
    return {
      player: this.player,
      x: (this.frame.alive)
        ? this.frame.body.x
        : this.data.x,
      y: (this.frame.alive)
        ? this.frame.body.y
        : this.data.y,
      life: this.life,
      alive: this.alive,
      angle: (this.frame.alive)
        ? this.frame.body.angle
        : this.data.angle,
      bulletContacts: this.bulletContacts,
      fire: false,
      turretRotation: this.turret.rotation,
      deathTime: this.deathTime
    }
  }

  _localSyncBase(newData = {}) {
    if (!this.alive && this.frame.alive) {
      return new Promise((resolve, reject) => {
        this.abort().then(result => {
          if (!result) {
            reject(false);
          } else {
            resolve(true);
          }
        });
      })
    } else {
      return new Promise((resolve, reject) => {
        if (this.alive && !this.frame.alive) {
          return this.create(newData);
        } else {
          this.life = newData.life;
          resolve(true);
        }
      })
    }
  }

  _localSyncFrame(newData) {
    return new Promise((resolve, reject) => {
      this.frame.body.x = newData.x;
      this.frame.body.y = newData.y;
      this.frame.body.angle = newData.angle;
      resolve(true);
    });
  }

  _localSyncTurret(newData) {
    return new Promise((resolve, reject) => {
      this.turret.x = this.frame.body.x;
      this.turret.y = this.frame.body.y;
      this.turret.rotation = newData.turretRotation;
      if (newData.fire) {
        this.fire(newData.target);
      }
      resolve(true);
    });
  }

  _localSyncContacts(newData) {
    return new Promise((resolve, reject) => {
      this.bulletContacts = _.union(newData.bulletContacts, this.bulletContacts);
      this.bulletContacts.forEach((bulletBody, index, bulletArray) => {
        this.hit(bulletBody);
        bulletArray.splice(index, 1);
      });
      if (!this.alive) {
        return this.kill();
      } else {
        resolve(true);
      }
    });
  }

  localSync(newData) {
    return new Promise((resolve, reject) => {
      return this._localSyncBase(newData).then(result => {
        return this._localSyncContacts(newData);
      }).then(result => {
        return this._localSyncFrame(newData);
      }).then(result => {
        return this._localSyncTurret(newData);
      }).then(result => {
        resolve(true);
      }).catch(err => {
        if (!err) {
          resolve(err);
        } else {
          reject(err);
        }
      })
    });
  }

  removeSync() {
    const contrroller = this._controller();
    this.game.data.sync.makeOne('updateTank', {tank: contrroller}).then(response => {}).catch(err => {
      console.error(err);
    });
  }

  create(data) {
    return new Promise((resolve, reject) => {
      if (data) {
        this.data = _.extend(this.data, data);
      }

      this.frame = this.game.add.sprite(this.data.x, this.data.y, this.imageKeyFrame);
      this.frame.scale.set(0.3, 0.3);
      this.frame.anchor.set(0.5, 0.5);
      this.game.physics.p2.enableBody(this.frame);
      this.frame.body.clearShapes();
      this.frame.body.loadPolygon(this.physicsData, 'body2');
      this.frame.body.angular = this.data.angle;
      this.frame.body.mass = 1000;
      this.frame.body.damping = 0.999;
      this.frame.body.angularDamping = 0.999;
      this.frame.body.inertia = 1000;
      this.frame.body.sleepSpeedLimit = 1400;
      this.frame.body.dynamic = true;
      // this.frame.body.debug = true; // debug

      this.turret = this.game.add.sprite(this.data.x, this.data.y, this.imageKeyTurret);
      this.turret.scale.set(0.3, 0.3);
      this.turret.anchor.set(0.3, 0.5);
      this.turretRadius = 33; // rotating turret radius
      this.turret.rotation = this.turretRotation;

      this.fireRate = 1000;
      this.nextFire = 0;
      this.alive = true;
      this.deathTime = 0;

      resolve(this.alive);
    })
  }

  reset(dataTank = {}) {
    if (dataTank) {
      this.data = _.extend(this.data, dataTank);
    }
    this.alive = true;
    console.log('reset :', this.player);
    this.removeSync();
    return this.alive;
  }

  abort() {
    return new Promise((resolve, reject) => {
      // this.frame.body.removeNextStep = true;
      this.frame.destroy();
      this.turret.destroy();
      resolve(false);
    });
  }

  kill() {
    return new Promise((resolve, reject) => {
      this.alive = false;
      this.deathTime = new Date().getTime();
      resolve(true);
    });
  }

  barrelEdge() {
    // http://flashgamedev.ru/viewtopic.php?f=6&t=3948
    const x0 = this.turret.x;
    const y0 = this.turret.y - this.turretRadius;
    const angleFix = 1.5708; // 45 gradusov

    const radians = this.turret.rotation + angleFix;

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
    if (this.game.time.now > this.nextFire) {
      this.nextFire = this.game.time.now + this.fireRate;
      const coorInitBullet = this.barrelEdge();
      this.initBullet(coorInitBullet.x, coorInitBullet.y, coorInitBullet.rotation, 800, {shooter: this});
    }
  }

  hit(point) {
    this.life--;
  }

  contactWithBullet(bullet, bodyB, shapeA, shapeB, equation) {
    const collisionPoint = {
      x: bullet.x,
      y: bullet.y
    };
    this.bulletContacts.push(collisionPoint);
  }

  update(newData) {
    // console.warn('objects list :', this.game.world.children.length);
    this.localSync(newData).then(resolve => {
      this.removeSync();
    }).catch(err => {
      console.error(err);
    });
  }

}

export default _Panzer;
