const defaultSides = 6;

class Die {
  constructor(numSides = 6) {
    if (Number(numSides) != numSides || numSides <= 0) {
      this.numSides = defaultSides;
    } else {
      this.numSides = numSides;
    }
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
