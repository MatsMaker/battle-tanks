import Phaser from '../Phaser.js';

class Tank {

  constructor(game) {
    this.game = game;
    this.source;
    this.imageKey = 'tank';
  }

  preload() {
    this.game.load.image(this.imageKey, require('../assets/Tank-GTA2.png'), 1);
  }

  create() {
    this.source = this.game.add.sprite(250, 250, this.imageKey);
    this.source.anchor.x = 0.5;
    this.source.anchor.y = 0.5;

    this.game.physics.enable(this.source, Phaser.Physics.ARCADE);

    this.source.body.drag.set(800);
    this.source.body.maxVelocity.set(200);
    // this.source.scale(0.3);

    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.up.isDown) {
      this.game.physics.arcade.accelerationFromRotation(this.source.rotation, 200, this.source.body.acceleration);
    } else {
      this.source.body.acceleration.set(0);
    }
    if (this.cursors.left.isDown) {
      this.source.body.angularVelocity = -100;
    } else if (this.cursors.right.isDown) {
      this.source.body.angularVelocity = 100;
    } else {
      this.source.body.angularVelocity = 0;
    }
  }

}

export default Tank;
