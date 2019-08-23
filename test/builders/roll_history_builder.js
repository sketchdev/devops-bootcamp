class RollHistoryBuilder {

  constructor(data = {}) {
    this.die_sides = data.die_sides || 6;
    this.result = data.result || 2;
    this.roll_time = data.roll_time || new Date();
  };

  withSides(value) { this.die_sides = value; return this; }
  withResult(value) { this.result = value; return this; }
  withRollTime(value) { this.roll_time = value; return this; }

  build() {
    let rollHistory = {};
    Object.keys(this).forEach((i) => {
      rollHistory[i] = this[i];
    });
    return rollHistory;
  }
}

module.exports = RollHistoryBuilder;
