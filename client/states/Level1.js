import Phaser from '../Phaser.js';
import AnimatedDots from '../objectWrappers/texts/AnimatedDots.js';
import RoadFromRiver from '../objectWrappers/maps/RoadFromRiver.js';
import Tank from '../objectWrappers/Tank.js';

import BulletGroup from '../objectWrappers/BulletGroup.js'
import Panzer from '../objectWrappers/_Panzer.js';
import OwnTank from '../objectWrappers/OwnTank.js';

class Level1 {

  _exetndTandkData(tankData) {
    const self = this;
    tankData.initBullet = function (x, y, rotation, speed, bulletData) {
      self.bulletGroup.initBullet(x, y, rotation, speed, bulletData);
    };
    return tankData;
  }

  initTanks() {
    this.game.data.sync.makeOne('initTank', {
      userId: this.game.data.userId,
      tank: {
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
        return new Panzer(this.game, tank.player, extankData);
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
      : new Panzer(this.game, tankData.player, extankData);
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
    Tank.preload(this.game);
    BulletGroup.preload(this.game);

    this.load.image('tm_ground', require('../assets/tilemaps/ground.png'));
    this.load.tilemap('csv_map', require('file!../assets/csv/map2.csv'));
  }

  init() {
    this.tanks = [];
    this.playerTank;

    this.background = this.stage.game.add.sprite(-80, -80, 'kdeWallpapers');
    this.background.scale.set(0.5);

    this.animatedDots = new AnimatedDots(this.game, this.game.world.centerX, this.game.world.centerY, '');
    this.animatedDots.setAnchor('centration');

    this.game.data.sync.addEventListener('disconnect', response => {
      this.lossUser(response);
      return {one: false}
    });
  }

  loadUpdate() {
    this.animatedDots.nexAnimatinStep();
  }

  create() {
    this.physics.startSystem(Phaser.Physics.P2JS);
    this.map = new RoadFromRiver(this.game, 'csv_map', 'tm_ground');

    this.layer = this.map.source.createLayer(0);
    this.layer.resizeWorld();
    this.stage.disableVisibilityChange = true;

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

export default Level1;
