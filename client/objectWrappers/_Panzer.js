import Phaser from '../Phaser.js';

const imageKeyFrame = 'tankBody_E-100';
const imageKeyTurret = 'tankTurret_E-100';
const physicsData = 'physicsData';

class _Panzer {

  constructor(game, player, data = {}) {
    this.game = game;
    this.data = {
      angle: data.angle || 0,
      x: null,
      x: null
    };
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
    this.life = (value) ?
      5 :
      0
  }

  get alive() {
    return this.life > 0;
  }

  static preload(game) {
    game.load.image(imageKeyFrame, require('../assets/E-100/body2.png'), 1);
    game.load.image(imageKeyTurret, require('../assets/E-100/turret.png'), 1);

    game.load.physics(physicsData, require('file!../assets/E-100/E-100.json'));
  }

  _controller() {
    return {
      player: this.player,
      x: this.frame.body.x,
      y: this.frame.body.y,
      life: this.life,
      alive: this.alive,
      angle: this.frame.body.angle,
      bulletContacts: this.bulletContacts,
      fire: false,
      turretRotation: this.turret.rotation,
    }
  }

  _localSyncContacts(newData) {
    return new Promise((resolve, reject) => {
      if (newData.bulletContacts.length === 0) {
        resolve(true);
      }
      newData.bulletContacts.forEach((bulletBody, index, bulletArray) => {
        this.hit(bulletBody);
        this.life--;
        bulletArray.slice(index, 1);
      });
      this.bulletContacts = [];
      if (!this.alive) {
        this.kill();
      }
      resolve(true);
    });
  }

  _localSyncTurret(newData) {
    return new Promise((resolve, reject) => {
      this.turret.x = this.frame.body.x;
      this.turret.y = this.frame.body.y;
      this.turret.rotation = this.turretRotation;
      resolve(true);
    });
  }

  _localSyncFrame(newData) {
    return new Promise((resolve, reject) => {
      this.frame.body.x = newData.x;
      this.frame.body.y = newData.y;
      this.frame.body.angle = newData.angle;
      resolve(true);
    });
  }

  _isAlive(newData) {
    this.life = newData.life;
    return new Promise((resolve, reject) => {
      if (!this.alive) {
        if (newData.alive) {
          this.create(true);
        }
        reject({ error: 'isDied' });
      };
      resolve(true);
    });
  }

  localSync(newData) {
    return new Promise((resolve, reject) => {
      return this._isAlive(newData)
        .then(result => {
          return this._localSyncFrame(newData);
        })
        .then(result => {
          return this._localSyncTurret(newData);
        })
        .then(result => {
          return this._localSyncContacts(newData);
        })
        .then(result => {
          resolve(true)
        })
        .catch(err => {
          reject(err);
        })
    });
  }

  removeSync() {
    const contrroller = this._controller();
    this.game.data.sync.makeOne('updateTank', { tank: contrroller })
      .then(response => {})
      .catch(err => {
        console.error(err);
      });
  }

  create() {
    this.frame = this.game.add.sprite(this.data.x, this.data.y, this.imageKeyFrame);
    this.turret = this.game.add.sprite(this.data.x, this.data.y, this.imageKeyTurret);

    this.frame.scale.set(0.3, 0.3);
    this.turret.scale.set(0.3, 0.3);

    this.frame.anchor.set(0.5, 0.5);
    this.turret.anchor.set(0.3, 0.5);
    this.turretRadius = 33; // rotating turret radius

    this.game.physics.p2.enableBody(this.frame);

    this.frame.body.clearShapes();
    this.frame.body.loadPolygon(this.physicsData, 'body2');

    this.turret.rotation = this.data.turretRotation;
    this.frame.body.angular = this.data.angle;

    this.frame.body.mass = 1000;
    this.frame.body.damping = 0.999;
    this.frame.body.angularDamping = 0.999;
    this.frame.body.inertia = 1000;
    this.frame.body.sleepSpeedLimit = 1400;
    this.frame.body.dynamic = true;
    // this.frame.body.debug = true; // debug

    this.fireRate = 1000;
    this.nextFire = 0;
    this.alive = true;
  }

  abort() {
    this.alive = false;
    if (this.frame) {
      this.frame.body.destroy();
      this.turret.destroy();
    }
  }

  kill() {
    console.log('Tank is killed. Owner: ', this.player);
  }

  barrelEdge() {
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
    if (this.game.time.now > this.nextFire) {
      this.nextFire = this.game.time.now + this.fireRate;
      const coorInitBullet = this.barrelEdge();
      this.initBullet(coorInitBullet.x, coorInitBullet.y, coorInitBullet.rotation, 800, { player: this.player });
    }
  }

  hit(point) {
    console.frame('Panser is hit point:', point);
  }

  contactBy(body, bodyB, shapeA, shapeB, equation) {
    if (body && body.sprite.key == 'tankBullet_E-100') {
      this.bulletContacts.push({ x: body.x, y: body.y, body });
    }
  }

  update(newData) {
    // console.warn('objects list :', this.game.world.children.length);
    this.localSync(newData)
      .then(resolve => {
        this.removeSync();
      })
      .catch(err => {
        // if (err.error == 'isDied') {   return; } console.warn(err); this._hostLocalSync();
      });
  }

}

export default _Panzer;
