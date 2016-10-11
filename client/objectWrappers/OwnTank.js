import Phaser from '../Phaser.js';
import Tank from './Tank.js';

const imageKeyFrame = 'tankBody_E-100-green';
const imageKeyTurret = 'tankTurret_E-100-green';
const physicsData = 'physicsData';

class OwnTank extends Tank {

  static preload(game) {
    super.preload(game);

    game.load.image(imageKeyFrame, require('../assets/E-100/green/body2.png'), 1);
    game.load.image(imageKeyTurret, require('../assets/E-100/green/turret.png'), 1);

    game.load.physics(physicsData, require('file!../assets/E-100/E-100.json'));
  }

  constructor(game, player, data) {
    super(game, player, data);
    this.imageKeyFrame = imageKeyFrame;
    this.imageKeyTurret = imageKeyTurret;

    this.cursors;
  }

  _controller() {
    let superController = super._controller();
    superController.move = {
      left: this.cursors.left.isDown,
      right: this.cursors.right.isDown,
      forward: this.cursors.up.isDown,
      back: this.cursors.down.isDown
    }
    superController.fire = this.game.input.mousePointer.leftButton.isDown;
    superController.target = {
      x: this.game.input.x + this.game.camera.x,
      y: this.game.input.y + this.game.camera.y
    };
    superController.turretRotation = this.game.physics.arcade.angleToPointer(this.turret);
    return superController;
  }

  _isNewCommand(newData) {
    return newData.move.left || newData.move.right || newData.move.forward || newData.move.back || newData.fire;
  }

  _localSyncFrame(newData, result = {}) {
    if (this._isNewCommand(newData)) {
      return this.moveLocalSync(newData, result);
    } else {
      return super._localSyncFrame(newData, result);
    }
  }

  moveLocalSync(newData, result = {}) {
    return new Promise((resolve, reject) => {
      if (result.alive) {
        if (newData.move.left) {
          this.frame.body.rotateLeft(50);
        } else if (newData.move.right) {
          this.frame.body.rotateRight(50);
        } else {
          this.frame.body.setZeroRotation();
        }
        if (newData.move.forward) {
          this.frame.body.thrust(800000);
        } else if (newData.move.back) {
          this.frame.body.reverse(250000);
        }
        result.moveSync = true;
        resolve(result);
      } else {
        result.moveSync = false;
        resolve(result);
      }
    });

  }

  // kill() {   console.warn('You died');   return super.kill(); }

  create(data) {
    return new Promise((resolve, reject) => {
      super.create(data).then(result => {
        if (result.alive) {
          if (!this.cursors) {
            this.cursors = this.game.input.keyboard.createCursorKeys();
          }
          this.game.camera.follow(this.frame);
          result.cameraFollow = true;
          resolve(result);
        } else {
          result.cameraFollow = false;
          resolve(result)
        }
      })
    })
  }

}

export default OwnTank;
