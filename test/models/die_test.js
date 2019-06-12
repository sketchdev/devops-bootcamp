require('../setup_test.js');
const Die = require('../../models/die');


/**
 * More documentation on .should.match/include/equal/be.false/have/etc. can be found at:
 *   https://www.chaijs.com/api/bdd/
 */


describe('die attributes', () => {

  // Test 1:
  //   Validate that a default die has 6 sides
  it('should return the default number of sides', () => {
    let die = new Die();
    die.sides.should.equal(6);
  });

  // Test 2:
  //   Validate that a die initialized with a specified number of sides
  //   reports that it has *that* many sides
  it('should return the specified number of sides', () => {
    let die = new Die(20);
    die.sides.should.equal(20);
  });

  // Test 3:
  //   Validate that a die initialized with a negative number of sides
  //   reports that it has the default number of sides
  it('should return the default number of sides when negative is passed', () => {
    let die = new Die(-8);
    die.sides.should.equal(6);
  });

  // Test 4:
  //   Validate that a die initialized with 0 sides
  //   reports that it has the default number of sides
  it('should return the default number of sides when 0 is passed', () => {
    let die = new Die(0);
    die.sides.should.equal(6);
  });

  // Test 5:
  //   Validate that a die initialized with non-numeric
  //   reports that it has the default number of sides
  it('should return the default number of sides when text is passed', () => {
    let die = new Die("alpha");
    die.sides.should.equal(6);
  });

  // Test 6:
  //   Validate that rolling a 1-sided die always returns 1
  it('should always return 1 when rolling a 1-sided die', () => {
    let die = new Die(1);
    die.roll().should.equal(1);
    die.roll().should.equal(1);
    die.roll().should.equal(1);
    die.roll().should.equal(1);
    die.roll().should.equal(1);
    die.roll().should.equal(1);
    die.roll().should.equal(1);
    die.roll().should.equal(1);
    die.roll().should.equal(1);
    die.roll().should.equal(1);
  });

  // Test 7:
  //   Validate that the roll result is never higher or lower than
  //   the number of sides on the die
  it('should always return 1 or 2 when rolling a 2-sided die', () => {
    let die = new Die(2);
    for (let i = 0; i < 1000; i++) {
      let result = die.roll();
      // console.log(result);
      result.should.be.above(0);
      result.should.be.below(3);
    }
  });
});
