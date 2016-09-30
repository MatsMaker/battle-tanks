import Phaser from '../Phaser.js';
import AnimatedDots from '../objectWrappers/texts/AnimatedDots.js';
import RoadFromRiver from '../objectWrappers/maps/RoadFromRiver.js';
import Tank from '../objectWrappers/Tank.js';

class Level1 {

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
      this.game.data.tanks = response.data.tanks;
      this.tanks = response.data.tanks.map(tank => {
        return new Tank(this.game, tank.player, tank);
      });

      this.tanks.forEach(tank => {
        tank.create();
      });
    })
  }

  addTank(tankData) {
    const newTank = new Tank(this.game, tankData.player, tankData)
    newTank.create();
    this.tanks.push(newTank);
  }

  updateTanks(response) {
    this.game.data.tanks = response.data.tanks;
    response.data.tanks.forEach(rTank => {
      let selectTank = this.tanks.find(lTank => lTank.player == rTank.player);
      if (selectTank) {
        selectTank.update(rTank);
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

  preload() {
    Tank.preload(this.game);

    this.load.image('tm_ground', require('../assets/tilemaps/ground.png'));
    this.load.tilemap('csv_map', require('file!../assets/csv/map2.csv'));
  }

  create() {
    this.initTanks();

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.map = new RoadFromRiver(this.game, 'csv_map', 'tm_ground');

    this.layer = this.map.source.createLayer(0);
    this.layer.resizeWorld();
    this.stage.disableVisibilityChange = true;
  }

  update() {
    this.game.data.sync.makeOne('getTanks', {}).then(this.updateTanks.bind(this)).catch(err => {
      console.error(err);
    });
  }

}

export default Level1;
