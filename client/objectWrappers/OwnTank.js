import Phaser from '../Phaser.js';
import _Panzer from './_Panzer.js';
const imageKeyBody = 'tankBody_E-100';
const imageKeyTurret = 'tankTurret_E-100';
const physicsData = 'physicsData';

class OwnTank extends _Panzer {

  constructor(game, player, data) {
    super(game, player, data);
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
    superController.turretRotation = this.turret.rotation;
    return superController;
  }

  _isNewCommand(newData) {
    return newData.move.left ||
      newData.move.right ||
      newData.move.forward ||
      newData.move.back ||
      newData.fire;
  }

  _localSyncFrame(newData) {
    return new Promise((resolve, reject) => {
      if (!this._isNewCommand(newData)) {
        this.frame.body.x = newData.x;
        this.frame.body.y = newData.y;
        this.frame.body.angle = newData.angle;
        resolve(true);
      } else {
        resolve('isNewCommand');
      }
    });

  }

  moveLocalSync(newData) {
    return new Promise((resolve, reject) => {
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
      this.turret.rotation = this.game.physics.arcade.angleToPointer(this.turret);
      resolve(true);
    });
  }

  create(isRespawn) {
    super.create();
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.camera.follow(this.frame);
  }

  respawn() {
    this.create();
    this.removeSync();
  }

  update(newData) {
    // console.warn('objects list :', this.game.world.children.length);
    this.localSync(newData)
      .then(resolve => {
        return this.moveLocalSync(newData);
      })
      .then(resolve => {
        this.removeSync();
      })
      .catch(err => {
        console.error(err);
        // if (err.error == 'isDied') {   return; } console.warn(err); this._hostLocalSync();
      });
  }
}

export default OwnTank;