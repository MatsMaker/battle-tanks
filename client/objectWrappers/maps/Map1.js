const tmGround = 'tm_ground';
const csvMap = 'csv_map';

class RoadFromRiver {

  constructor(game) {
    this.game = game;
    this.tmGround = tmGround;
    this.csvMap = csvMap;
  }

  static preload(game) {
    game.load.image(tmGround, require('../../assets/tilemaps/ground.png'));
    game.load.tilemap(csvMap, require('file!../../assets/csv/map2.csv'));
  }

  create() {
    this.tilemap = this.game.add.tilemap(csvMap, 32, 32);
    this.tilemap.enableBody = true;
    this.tilemap.addTilesetImage(tmGround);
    this.tilemap.setCollisionBetween(0, 100);

    this.layer = this.tilemap.createLayer(0);
    this.layer.resizeWorld();
    this.game.stage.disableVisibilityChange = true;
  }

}

export default RoadFromRiver;
