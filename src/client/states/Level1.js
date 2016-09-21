import AnimatedDots from '../objectWrappers/texts/AnimatedDots.js';
import RoadFromRiver from '../objectWrappers/maps/RoadFromRiver.js';
import Tank from '../objectWrappers/Tank.js';

class Level1 {

  init() {
    this.background = this.stage.game.add.sprite(-80, -80, 'kdeWallpapers');
    this.background.scale.set(0.5);

    this.animatedDots = new AnimatedDots(this.game, this.game.world.centerX, this.game.world.centerY, '')
    this.animatedDots.setAnchor('centration');

    this.tank1 = new Tank(this.game);
  }

  loadUpdate() {
    this.animatedDots.nexAnimatinStep();
  }

  preload() {
    this.tank1.preload();

    this.load.image('tm_ground', require('../assets/tilemaps/ground.png'));
    this.load.tilemap('csv_map', require('file!../assets/csv/road-from-river.csv'));

  }

  create() {
    this.map = new RoadFromRiver(this.game, 'csv_map', 'tm_ground');

    this.layer = this.map.source.createLayer(0);
    this.layer.resizeWorld();

    this.tank1.create();
  }

  update() {
    this.tank1.update();
  }

}

export default Level1;
