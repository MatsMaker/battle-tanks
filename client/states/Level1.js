import Phaser from '../Phaser.js';
import AnimatedDots from '../objectWrappers/texts/AnimatedDots.js';
import RoadFromRiver from '../objectWrappers/maps/RoadFromRiver.js';
import Tank from '../objectWrappers/Tank.js';

class Level1 {

  initTanks() {
    this.game.data.socket.emit('initTank', {
      userId: this.game.data.userId,
      data: {
        tank: {
          alive: true,
          player: this.game.data.userId,
          x: this.world.centerX,
          y: this.world.centerY,
          angle: 0
        }
      }
    });
    this.game.data.socket.on('initTank', response => {
      if (response.userId === this.game.data.userId) {
        this.game.data.tanks = response.data.tanks;
        this.tanks = response.data.tanks.map(tank => {
          return new Tank(this.game, tank.player, tank);
        });

        this.tanks.forEach(tank => {
          tank.create();
        });

        this.playerTank = this.tanks.find(tank => tank.player == this.game.data.userId);
        this.camera.follow(this.playerTank.source);
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

    this.game.data.socket.on('getTanks', response => {
      if (response.userId == this.game.data.userId) {
        this.game.data.tanks = response.data.tanks;
        response.data.tanks.forEach(rTank => {
          let selectTank = this.tanks.find(lTank => lTank.player == rTank.player);
          if (selectTank) {
            selectTank.update(rTank);
          } else {
            const newTank = new Tank(this.game, rTank.player, rTank)
            newTank.create();
            this.tanks.push(newTank);
          }
        });
      }
    });
  }

  loadUpdate() {
    this.animatedDots.nexAnimatinStep();
  }

  preload() {
    Tank.preload(this.game);

    this.load.image('tm_ground', require('../assets/tilemaps/ground.png'));
    this.load.tilemap('csv_map', require('file!../assets/csv/road-from-river.csv'));
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
    this.game.data.socket.emit('getTanks', {userId: this.game.data.userId});
  }

}

export default Level1;
