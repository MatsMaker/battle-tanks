import Phaser from '../Phaser.js';

const imageKey = 'tank';

class Tank {

  constructor(game, player) {
    this.game = game;
    this.player = player;
    this.source;
    this.imageKey = imageKey;
  }

  static preload(game) {
    game.load.image(imageKey, require('../assets/Tank-GTA2.png'), 1);
  }

  create() {
    this.source = this.game.add.sprite(250, 250, this.imageKey);
    this.source.scale.set(0.3, 0.3);
    this.source.anchor.set(0.5, 0.5);

    this.game.physics.p2.enable(this.source);
    this.source.body.mass = 1000;
    this.source.body.damping = 0.999;
    this.source.body.angularDamping = 0.999;
    this.source.body.inertia = 1000;
    this.source.body.sleepSpeedLimit = 1500;
    this.source.body.dynamic = true;

    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.source.body.rotateLeft(50);
    } else if (this.cursors.right.isDown) {
      this.source.body.rotateRight(50);
    } else {
      this.source.body.setZeroRotation();
    }
    if (this.cursors.up.isDown) {
      this.source.body.thrust(1000000);
    } else if (this.cursors.down.isDown) {
      this.source.body.reverse(1000000);
    }
  }

}

export default Tank;
