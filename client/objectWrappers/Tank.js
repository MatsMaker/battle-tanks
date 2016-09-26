import Phaser from '../Phaser.js';

const imageKey = 'tank';

class Tank {

  constructor(game, player, data) {
    this.game = game;
    this.data = data;
    this.player = player;
    this.source;
    this.imageKey = imageKey;
  }

  static preload(game) {
    game.load.image(imageKey, require('../assets/Tank-GTA2.png'), 1);
  }

  create() {
    this.source = (this.data)
      ? this.game.add.sprite(this.data.x, this.data.y, this.imageKey)
      : this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, this.imageKey);
    this.source.scale.set(0.3, 0.3);
    this.source.anchor.set(0.5, 0.5);

    this.game.physics.p2.enable(this.source);
    this.source.body.angular = (this.data)
      ? this.data.angle
      : 0;
    this.source.body.mass = 1000;
    this.source.body.damping = 0.999;
    this.source.body.angularDamping = 0.999;
    this.source.body.inertia = 1000;
    this.source.body.sleepSpeedLimit = 1400;
    this.source.body.dynamic = true;

    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update(remouteTankData) {
    if (this.player === this.game.data.userId) {
      if (this.cursors.left.isDown) {
        this.source.body.rotateLeft(50);
      } else if (this.cursors.right.isDown) {
        this.source.body.rotateRight(50);
      } else {
        this.source.body.setZeroRotation();
      }
      if (this.cursors.up.isDown) {
        this.source.body.thrust(800000);
      } else if (this.cursors.down.isDown) {
        this.source.body.reverse(800000);
      }
      this.game.data.reduser.makeOne('updateTank', {
        tank: {
          player: this.player,
          x: this.source.body.x,
          y: this.source.body.y,
          angle: this.source.body.angle
        }
      }).then(response => {

      }).catch(err => {
        console.error(err);
      })
    } else if (remouteTankData) {
      this.source.body.x = remouteTankData.x;
      this.source.body.y = remouteTankData.y;
      this.source.body.angle = remouteTankData.angle;
    }
  }

}

export default Tank;
