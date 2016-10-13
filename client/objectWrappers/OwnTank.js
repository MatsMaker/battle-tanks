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
      x: this.game.input.x + this.game.camera.x,
      y: this.game.input.y + this.game.camera.y
    };
    superController.turretRotation = this.game.physics.arcade.angleToPointer(this.turret);
    return superController;
  }

  kill() {
    console.warn('You died');
    return super.kill();
  }

  //view range
  // updateCamera() {
  //   const cameraPosition = this.barrelEdge(this.viewingRange);
  //   this.game.camera.focusOnXY(cameraPosition.x, cameraPosition.y);
  // }
  //
  // _localSyncTurret(result = {}) {
  //   const newData = this.newData;
  //   this.updateCamera();
  //   return super._localSyncTurret(newData, result = {});
  // }

  hit(point) {
    this.game.camera.shake(0.005, 100);
    this.game.camera.flash('#F5F5DC', 30);
    super.hit(point);
  }

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
