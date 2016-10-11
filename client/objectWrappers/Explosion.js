const explosionImageKey = 'explosion_ring_ew_spritesht';

class Explosion {

  constructor(game) {
    this.game = game;
    this.explosionImageKey = explosionImageKey;
  }

  static getExplosionImageKey() {
    return explosion_ring_ew_spritesht;
  }

  static preload(game) {
    game.load.spritesheet(explosionImageKey, require('../assets/tilemaps/explosion_ring_ew_spritesht.png'), 254, 254);
  }

  bigExplosion(x, y, scale) {
    return new Promise((resolve, reject) => {
      const scale = scale || 0.5;

      const explosion = this.game.add.sprite(x, y, this.explosionImageKey);

      explosion.scale.set(scale, scale);
      explosion.anchor.set(0.5, 0.5);

      let play = explosion.animations.add('explosion', [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14
      ]);

      play.killOnComplete = true;
      play.play(30, false, false);

      setTimeout(() => {
        explosion.destroy();
        resolve(true);
      }, 1000);

    });
  }

  hit(point) {
    const explosion = this.game.add.sprite(point.x, point.y, this.explosionImageKey);
    explosion.scale.set(0.15, 0.15);
    explosion.angle = point.angle || 0;

    let play = explosion.animations.add('play', [
      0, 8
    ], 10);

    explosion.anchor.set(0.5, 0.5);
    play.play(10, false, true);

    setTimeout(() => {
      if (play.isFinished) {
        explosion.destroy();
      }
    }, 300);
  }

  zilch(point) {
    const explosion = this.game.add.sprite(point.x, point.y, this.explosionImageKey);
    explosion.scale.set(0.15, 0.15);
    explosion.angle = point.angle || 0;

    let play = explosion.animations.add('play', [
      8,
      9,
      10,
      11,
      12,
      13
    ], 10);

    explosion.anchor.set(0.5, 0.5);
    play.play(10, false, true);

    setTimeout(() => {
      if (play.isFinished) {
        explosion.destroy();
      }
    }, 300);
  }
}

export default Explosion;
