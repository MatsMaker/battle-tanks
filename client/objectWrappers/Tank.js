import Phaser from '../Phaser.js';

const imageKeyBody = 'tankBody_E-100';
const imageKeyTurret = 'tankTurret_E-100';

class Tank {

  constructor(game, player, data) {
    this.game = game;
    this.data = data || {};
    this.player = player;
    this.source;
    this.imageKeyBody = imageKeyBody;
    this.imageKeyTurret = imageKeyTurret;
  }

  static preload(game) {
    game.load.image(imageKeyBody, require('../assets/E-100/body2.png'), 1);
    game.load.image(imageKeyTurret, require('../assets/E-100/turret.png'), 1);
  }

  create() {
    const initPosition = {
      x: this.data.x || this.game.world.centerX,
      y: this.data.y || this.game.world.centerY
    };

    this.source = this.game.add.sprite(initPosition.x, initPosition.y, this.imageKeyBody);
    this.turret = this.game.add.sprite(initPosition.x, initPosition.y, this.imageKeyTurret);

    this.source.scale.set(0.3, 0.3);
    this.turret.scale.set(0.3, 0.3);
    this.source.anchor.set(0.5, 0.5);
    this.turret.anchor.set(0.3, 0.5);
    this.turret.angle = this.data.turretRotation || 0;

    this.game.physics.p2.enable(this.source);

    this.source.body.angular = this.data.angle || 0;

    this.source.body.mass = 1000;
    this.source.body.damping = 0.999;
    this.source.body.angularDamping = 0.999;
    this.source.body.inertia = 1000;
    this.source.body.sleepSpeedLimit = 1400;
    this.source.body.dynamic = true;

    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  destroy() {
    this.source.body.destroy();
    this.source.destroy();
    this.turret.destroy();
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
        this.source.body.reverse(250000);
      }
      this.turret.rotation = this.game.physics.arcade.angleToPointer(this.turret);
      this.turret.x = this.source.body.x;
      this.turret.y = this.source.body.y;
      this.game.data.reduser.makeOne('updateTank', {
        tank: {
          player: this.player,
          x: this.source.body.x,
          y: this.source.body.y,
          angle: this.source.body.angle,
          turretRotation: this.turret.rotation
        }
      }).then(response => {}).catch(err => {
        console.error(err);
      })
    } else if (remouteTankData) {
      this.source.body.x = remouteTankData.x;
      this.source.body.y = remouteTankData.y;
      this.source.body.angle = remouteTankData.angle;
      this.turret.rotation = remouteTankData.turretRotation;
    }
    this.turret.x = this.source.body.x;
    this.turret.y = this.source.body.y;
  }

}

export default Tank;
