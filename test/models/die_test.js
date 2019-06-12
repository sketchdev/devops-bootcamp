const chai = require('chai');
const Die = require('../../models/die');
global.should = chai.should();
global.expect = chai.expect;


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
});
