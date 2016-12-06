import Phaser from '../Phaser.js';
import Tank from './Tank.js';

const imageKeyFrame = 'tankBody_E-100-green';
const imageKeyTurret = 'tankTurret_E-100-green';
const physicsData = 'physicsData';

class OwnTank extends Tank {

  static preload(game) {
    super.preload(game);

    game
      .load
      .image(imageKeyFrame, require('../assets/E-100/green/body_40x76.png'), 1);
    game
      .load
      .image(imageKeyTurret, require('../assets/E-100/green/turret_79x27.png'), 1);

    game
      .load
      .physics(physicsData, require('file!../assets/E-100/E-100.json'));
  }

  constructor(game, player, data) {
    super(game, player, data);
    this.imageKeyFrame = imageKeyFrame;
    this.imageKeyTurret = imageKeyTurret;
    // this.viewingRange = 100;

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
      x: this.game.input.worldX,
      y: this.game.input.worldY
    };
    superController.turretRotation = this
      .game
      .physics
      .arcade
      .angleToPointer(this.turret);
    if (this._isNewCommand(superController)) {
      this.removeSync(superController);
    }
    return superController;
  }

  moveLocalSync(result = {}) {
    const newData = this.newData;
    return new Promise((resolve, reject) => {
      if (result.alive) {
        if (newData.move.left) {
          this
            .frame
            .body
            .rotateLeft(40);
        } else if (newData.move.right) {
          this
            .frame
            .body
            .rotateRight(40);
        } else {
          this
            .frame
            .body
            .setZeroRotation();
        }
        if (newData.move.forward) {
          this
            .frame
            .body
            .thrust(this.enginePower);
        } else if (newData.move.back) {
          this
            .frame
            .body
            .reverse(this.enginePower * 0.5);
        }
        result.moveSync = true;
        resolve(result);
      } else {
        result.moveSync = false;
        resolve(result);
      }
    });
  }

  _localSyncFrame(result = {}) {
    const newData = this.newData;
    this._licalSyncInterface(result);
    if (this._isNewCommand()) {
      return this.moveLocalSync(newData, result);
    } else {
      return super._localSyncFrame(newData, result);
    }
  }

  kill() {
    console.warn('You died');
    return super.kill();
  }

  hit(point) {
    this
      .game
      .camera
      .shake(0.005, 100);
    this
      .game
      .camera
      .flash('#F5F5DC', 30);
    super.hit(point);
  }

  removeSync(controller = this._controller()) {
    this
      .game
      .data
      .sync
      .makeOne('updateTank', {tank: controller});
  }

  isCommand() {
    const cursors = this.cursors;
    const mouseMove = this.newData.target && (this.newData.target.x !== this.game.input.worldX || this.newData.target.y !== this.game.input.worldY);
    return mouseMove || cursors.left.isDown || cursors.right.isDown || cursors.down.isDown || cursors.up.isDown || this.game.input.mousePointer.leftButton.isDown;
  }

  update(newData) {
    if (this.isCommand()) {
      this.removeSync();
      super.update(newData);
    } else if (this._isNewCommand()) {
      super.update(newData);
      this.removeSync();
    } else {
      super.update(newData);
    }
  }

  create(data) {
    return new Promise((resolve, reject) => {
      super
        .create(data)
        .then(result => {
          if (result.alive) {
            if (!this.cursors) {
              this.cursors = this
                .game
                .input
                .keyboard
                .createCursorKeys();
            }
            this
              .game
              .camera
              .follow(this.frame);
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
