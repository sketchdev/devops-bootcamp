class Die {
  constructor(numSides = 6) {
    this.numSides = numSides;
  }

  // Getter
  get sides() {
    return this.numSides;
  }

  roll() {
    return Math.ceil(Math.random() * this.numSides);
  }
}

module.exports = Die;
