import Phaser from '../Phaser.js';
import AnimatedDots from '../objectWrappers/texts/AnimatedDots.js';
import Map1 from '../objectWrappers/maps/Map1.js';

import BulletGroup from '../objectWrappers/BulletGroup.js'
import AlienTank from '../objectWrappers/AlienTank.js';
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
        createTime: new Date().getTime(),
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
      : new AlienTank(this.game, tankData.player, extankData);
    newTank.create(extankData).then(result => {
      if (result) {
        this.tanks.push(newTank);
      } else {
        console.error('error create new tank');
      }
    }).catch(err => {
      console.error(err);
    })
  }

  isOwner(tank) {
    return tank.player == this.game.data.userId;
  }

  updateTanks(response) {
    this.game.data.tanks = response.data.tanks;
    const userTankIndex = response.data.tanks.findIndex(tank => this.game.data.userId == tank.player);

    if (userTankIndex == -1) {
      this.initTank();
    }

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
        tank.abort().then(resolve => {
          arrayTanks.splice(index, 1);
        }).catch(err => {
          console.error(err);
        });
      }
    });
  }

  preload() {
    OwnTank.preload(this.game);
    AlienTank.preload(this.game);
    BulletGroup.preload(this.game);
    Map1.preload(this.game);
  }

  init() {
    this.tanks = [];

    this.background = this.stage.game.add.sprite(-80, -80, 'kdeWallpapers');
    this.background.scale.set(0.5);

    this.animatedDots = new AnimatedDots(this.game, this.game.world.centerX, this.game.world.centerY, '');
    this.animatedDots.setAnchor('centration');

    this.map = new Map1(this.game);

    this.game.data.sync.addEventListener('disconnect', response => {
      this.lossUser(response);
      return {one: false}
    });
  }

  create() {
    this.background.destroy();
    this.animatedDots.destroy();

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.map.create();

    this.bulletGroup = new BulletGroup(this.game);
    this.bulletGroup.create();
  }

  update() {
    this.game.data.sync.makeOne('getTanks', {}).then(this.updateTanks.bind(this)).catch(err => {
      console.error(err);
    });
  }

}

export default Level;
