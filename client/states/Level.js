import Phaser from '../Phaser.js';
import AnimatedDots from '../objectWrappers/texts/AnimatedDots.js';
import Map1 from '../objectWrappers/maps/Map1.js';

import BulletGroup from '../objectWrappers/BulletGroup.js'
import EnemyTank from '../objectWrappers/EnemyTank.js';
import OwnTank from '../objectWrappers/OwnTank.js';

class Level {

  onBulletContactTank(bullet, body, bodyB, shapeA, shapeB, equation) {
    const target = this.tanks.find(tank => tank.isOwnerFrameBody(body));
    if (target === undefined) {
      return;
    } else {
      const multiplier = equation[0].multiplier; //when multiplier == 0, reflection is error calculation?
      target.contactWithBullet(bullet.x, bullet.y, multiplier);
      if (multiplier == 0) {
        bullet.ricochet();
      } else {
        target.armorPenetration(bullet);
      }
    }
  }

  _exetndTandkData(tankData) {
    const self = this;

    self.bulletGroup.options.onBulletContact = function (bullet, body, bodyB, shapeA, shapeB, equation, multiplier) {
      if (bullet.imageKey != body.sprite.key) {
        self.onBulletContactTank(bullet, body, bodyB, shapeA, shapeB, equation, multiplier)
      }
    };

    tankData.initBullet = function (x, y, rotation, speed, bulletData) {
      self.bulletGroup.initBullet(x, y, rotation, speed, bulletData);
    };
    return tankData;
  }

  initTank() {
    this.game.data.sync.makeOne('initTank', {
      userId: this.game.data.userId,
      tank: {
        alive: true,
        player: this.game.data.userId,
        x: this.world.centerX,
        y: this.world.centerY,
        angle: 0,
        bulletContacts: [],
        life: 5,
        turretRotation: 0,
        fire: false,
        target: {
          x: this.world.centerX,
          y: this.world.centerY + 20
        },
        deathTime: 0,
        move: {
          left: false,
          right: false,
          forward: false,
          back: false
        }
      }
    }).then(result => {
      console.log('Yours tank was initiated. It is id:', this.game.data.userId);
    })
  }

  addTank(tankData) {
    const extankData = this._exetndTandkData(tankData);
    const newTank = (this.isOwner(tankData))
      ? new OwnTank(this.game, tankData.player, extankData)
      : new EnemyTank(this.game, tankData.player, extankData);
    newTank.create(extankData).then(result => {
      this.tanks.push(newTank);
    }).catch(err => {
      console.error(err);
    })
  }

  isOwner(tank) {
    return tank.player == this.game.data.userId;
  }

  updateTanks(response) {
    const nowTime = new Date().getTime();
    this.game.data.tanks = response.tanks;
    const userTankIndex = response.tanks.findIndex(tank => this.game.data.userId == tank.player);

    if (userTankIndex == -1) {
      this.initTank();
    }

    response.tanks.forEach(rTank => {
      let selectTankIndex = this.tanks.findIndex(lTank => lTank.player == rTank.player);

      if (selectTankIndex > -1) {
        this.tanks[selectTankIndex].update(rTank);
      } else {
        this.addTank(rTank);
      }

    });
  }

  lossUser(response) {
    const lossUserId = response.userId;
    this.tanks.forEach((tank, index, arrayTanks) => {
      if (tank.player == lossUserId) {
        tank.abort().then(resolve => {
          arrayTanks.splice(index, 1);
        }).catch(err => {
          console.error(err);
        });
      }
    });
  }

  respawn() {
    const deadTanks = this.tanks.filter(tank => !tank.alive && this.isOwner(tank));
    deadTanks.forEach(tank => {
      tank.reset({x: this.game.world.randomX, y: this.game.world.randomY});
    });
  }

  preload() {
    OwnTank.preload(this.game);
    EnemyTank.preload(this.game);
    BulletGroup.preload(this.game);
    Map1.preload(this.game);
  }

  init() {
    this.tanks = [];
    this.resetDelay = 10000;

    this.background = this.stage.game.add.sprite(-80, -80, 'kdeWallpapers');
    this.background.scale.set(0.5);

    this.animatedDots = new AnimatedDots(this.game, this.game.world.centerX, this.game.world.centerY, '');
    this.animatedDots.setAnchor('centration');

    this.map = new Map1(this.game);
    this.bulletGroup = new BulletGroup(this.game);
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.physics.p2.setImpactEvents(true);
    this.game.physics.p2.restitution = 0.9;
    this.game.canvas.style.cursor = "crosshair";

    this.background.destroy();
    this.animatedDots.destroy();

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.map.create();
    this.bulletGroup.create();

    this.game.data.sync.addEventListener('getTanks', response => {
      this.updateTanks.bind(this)(response);
      return {one: false}
    });

    this.game.data.sync.addEventListener('lossUser', response => {
      this.lossUser(response);
      return {one: false}
    });

    this.game.time.events.loop(this.resetDelay, this.respawn, this);
  }

  update() {}

}

export default Level;
