import Phaser from '../Phaser.js';
import AnimatedDots from '../objectWrappers/texts/AnimatedDots.js';
import Map1 from '../objectWrappers/maps/Map1.js';

import BulletGroup from '../objectWrappers/BulletGroup.js'
import Tank from '../objectWrappers/Tank.js';
import OwnTank from '../objectWrappers/OwnTank.js';

class Level {

  onBulletContactTank(bullet, body, bodyB, shapeA, shapeB, equation) {
    const target = this.tanks.find(tank => tank.isOwnerFrameBody(body));
    target.contactWithBullet(body, bodyB, shapeA, shapeB, equation);
  }

  _exetndTandkData(tankData) {
    const self = this;

    self.bulletGroup.options.onBulletContact = function (bullet, body, bodyB, shapeA, shapeB, equation) {
      self.onBulletContactTank(bullet, body, bodyB, shapeA, shapeB, equation)
    };

    tankData.initBullet = function (x, y, rotation, speed, bulletData) {
      self.bulletGroup.initBullet(x, y, rotation, speed, bulletData);
    };
    return tankData;
  }

  initTanks() {
    this.game.data.sync.makeOne('initTank', {
      userId: this.game.data.userId,
      tank: {
        restart: false,
        alive: true,
        player: this.game.data.userId,
        x: this.world.randomX,
        y: this.world.randomY,
        angle: 0,
        bulletContacts: [],
        life: 5,
        turretRotation: 0,
        fire: false,
        target: {
          x: this.world.centerX,
          y: this.world.centerY + 20
        },
        move: {
          left: false,
          right: false,
          forward: false,
          back: false
        }
      }
    }).then(response => {
      const self = this;
      this.game.data.tanks = response.data.tanks;
      this.tanks = response.data.tanks.map(tank => {
        const extankData = self._exetndTandkData(tank);
        if (this.isOwner(extankData)) {
          return new OwnTank(this.game, tank.player, extankData);
        }
        return new Tank(this.game, tank.player, extankData);
      });

      this.tanks.forEach(tank => {
        tank.create();
      });
    })
  }

  addTank(tankData) {
    const extankData = this._exetndTandkData(tankData);
    const newTank = (this.isOwner(tankData))
      ? new OwnTank(this.game, tankData.player, extankData)
      : new Tank(this.game, tankData.player, extankData);
    newTank.create();
    this.tanks.push(newTank);
  }

  isOwner(tank) {
    return tank.player == this.game.data.userId;
  }

  updateTanks(response) {
    this.game.data.tanks = response.data.tanks;
    response.data.tanks.forEach(rTank => {
      let selectTankIndex = this.tanks.findIndex(lTank => lTank.player == rTank.player);
      if (selectTankIndex > -1) {
        this.tanks[selectTankIndex].update(rTank);
      } else {
        this.addTank(rTank);
      }
    });
  }

  lossUser(response) {
    const lossUserId = response.data.userId;
    this.tanks.forEach((tank, index, arrayTanks) => {
      if (tank.player == lossUserId) {
        tank.abort();
        arrayTanks.splice(index, 1);
      }
    });
  }

  preload() {
    OwnTank.preload(this.game);
    Tank.preload(this.game);
    BulletGroup.preload(this.game);
    Map1.preload(this.game);
  }

  init() {
    this.tanks = [];

    this.background = this.stage.game.add.sprite(-80, -80, 'kdeWallpapers'); this.background.scale.set(0.5);

    this.animatedDots = new AnimatedDots(this.game, this.game.world.centerX, this.game.world.centerY, '');
    this.animatedDots.setAnchor('centration');

    this.map = new Map1(this.game);

    this.game.data.sync.addEventListener('disconnect', response => {
      this.lossUser(response);
      return {one: false}
    });
  }

  loadUpdate() {
    this.animatedDots.nexAnimatinStep();
  }

  create() {
    this.background.destroy();
    this.animatedDots.destroy();

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.map.create();

    this.bulletGroup = new BulletGroup(this.game);
    this.bulletGroup.create();

    this.initTanks();
  }

  update() {
    this.game.data.sync.makeOne('getTanks', {}).then(this.updateTanks.bind(this)).catch(err => {
      console.error(err);
    });
  }

}

export default Level;
