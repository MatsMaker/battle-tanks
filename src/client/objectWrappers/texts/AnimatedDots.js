class AnimatedDots {

  constructor(game, x, y, text, style) {
    this.y = y;
    this.text = text;
    this.x = x;
    this.style = {
      fill: '#05373E',
      fontSize: '32px'
    };
    this.origin = game.add.text(this.x, this.y, this.text, this.style);
  }

  setAnchor(value) {
    if(value === 'centration') {
      this.origin.anchor.x = 0.5;
      this.origin.anchor.y = 0.5;
    }
  }

  getStuff() {
    return this.origin;
  }

  nexAnimatinStep() {
    this.origin.text += '.';
  }

}

export default AnimatedDots;
