import Phaser from '../Phaser.js';
import AnimatedDots from '../objectWrappers/texts/AnimatedDots.js';
import RoadFromRiver from '../objectWrappers/maps/RoadFromRiver.js';
import Tank from '../objectWrappers/Tank.js';

class Level1 {

  init() {
    this.background = this.stage.game.add.sprite(-80, -80, 'kdeWallpapers');
    this.background.scale.set(0.5);

    this.animatedDots = new AnimatedDots(this.game, this.game.world.centerX, this.game.world.centerY, '');
    this.animatedDots.setAnchor('centration');

    this.tanks = this.game.data.tanks;
    this.playerTank;
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
    this.physics.startSystem(Phaser.Physics.P2JS);
    this.map = new RoadFromRiver(this.game, 'csv_map', 'tm_ground');

    this.layer = this.map.source.createLayer(0);
    this.layer.resizeWorld();

    this.tanks = this.tanks.map(tank => {
      return new Tank(this.game, tank.player, tank)
    });

    this.tanks.forEach(tank => {
      tank.create();
    });

    this.playerTank = this.tanks.find(tank => tank.player == this.game.data.userId);

    if (!this.playerTank) {
      this.playerTank = new Tank(this.game, this.game.data.userId);
      this.playerTank.create();
      this.game.data.socket.emit('addTank', {
        userId: this.game.data.userId,
        data: {
          tank: {
            player: this.game.data.userId,
            x: this.playerTank.source.body.x,
            y: this.playerTank.source.body.y,
            angle: this.playerTank.source.body.angle
          }
        }
      });
    }
    this.camera.follow(this.playerTank.source);

    this.game.data.socket.emit('getTanks', {userId: this.game.data.userId});
    this.game.data.socket.on('getTanks', response => {
      if (response.userId == this.game.data.userId) {
        this.game.data.tanks = response.data.tanks;
      }
    });
  }

  update() {
    this.game.data.socket.emit('getTanks', {userId: this.game.data.userId});

    this.game.data.tanks.forEach((remotetank, index, arrayTanck) => {
      const localTankData = this.tanks.find(locakTank => locakTank.player == remotetank.player);
      if (localTankData) {
        localTankData.update(remotetank);
      } else {
        const newTank = new Tank(this.game, remotetank.player, remotetank);
        this.tanks.push(newTank);
        newTank.create();
      }
    });

    this.tanks.forEach((localTank, index, localTanks) => {
      if (!this.game.data.tanks.find(remouteTank => remouteTank.player == localTank.player)) {
        localTanks[index].source.body.destroy();
        localTanks.splice(index, 1);
      }
    })
  }

}

export default Level1;
