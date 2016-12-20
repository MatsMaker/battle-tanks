class StartMenu {

  constructor(game) {
    this.game = game;
    this.buttons = {};

    // Start button
    this.buttons.startGame = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'btn_greenGo', this.eventListener, this, 2, 1, 0);
    this.buttons.startGame.name = 'start';
    this.buttons.startGame.anchor.setTo(0.5, 0.5);
    //
  }

  eventListener(button) {
    if (button.name == 'start' && this.onStartGame) {
      this.onStartGame(button);
    }
  }
}

export default StartMenu;
