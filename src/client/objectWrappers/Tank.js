import Phaser from '../Phaser.js';

class Tank {

  constructor(game, options) {
    this.game = game;
    this.source;
    this.imageKey = 'tank';
  }

  preload() {
    this.game.load.image(this.imageKey, require('../assets/Tank-GTA2.png'), 1);
  }

  create() {
    this.source = this.game.add.sprite(250, 250, this.imageKey);
    this.source.scale.set(0.3, 0.3);
    this.source.anchor.set(0.5, 0.5);

    this.game.physics.enable(this.source, Phaser.Physics.ARCADE);

    this.source.body.bounce.set(0.3);
    this.source.body.collideWorldBounds = true;
    this.source.body.drag.set(900);
    this.source.body.mass = 1000;
    // this.source.body.angularDrag = 1000; this.source.body.maxAngular = 80;
    this.source.body.maxVelocity.set(250);
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update() {
    this.source.body.velocity.x = 0;
    this.source.body.velocity.y = 0;
    this.source.body.angularVelocity = 0;

    if (this.cursors.left.isDown) {
      this.source.body.angularVelocity = -150;
    } else if (this.cursors.right.isDown) {
      this.source.body.angularVelocity = 150;
    }

    if (this.cursors.up.isDown) {
      this.source.body.velocity.copyFrom(this.game.physics.arcade.velocityFromAngle(this.source.angle, 200));
    } else if (this.cursors.down.isDown) {
      this.source.body.velocity.copyFrom(this.game.physics.arcade.velocityFromAngle(this.source.angle, -200));
    }

  }

  render() {
    this.game.debug.body(this.source);
  }

}

export default Tank;
