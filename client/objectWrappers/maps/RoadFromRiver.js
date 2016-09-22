class RoadFromRiver {

  constructor(game, tilemapKey, imageKey) {
    this.source = game.add.tilemap(tilemapKey, 32, 32);
    this.source.enableBody = true;
    this.source.addTilesetImage(imageKey);
    this.source.setCollisionBetween(0, 100);
  }

}

export default RoadFromRiver;
