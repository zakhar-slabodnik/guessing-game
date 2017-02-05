class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  // 253 + (506-253)/2 
  guess() {
    this.guessing = this.min + Math.ceil((this.max - this.min) / 2);
    return this.guessing;
  }

  lower() {
    this.max = this.guessing;
  }

  greater() {
    this.min = this.guessing;
  }
}

module.exports = GuessingGame;
