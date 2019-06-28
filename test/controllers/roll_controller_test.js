require('../setup_test.js');
const { db } = require('../../lib/db');

describe('roll', async () => {

  // Test 1:
  //   Validate that it rolls a default number of sides and replies correctly
  it('should return the expected "A die with n sides..." result', async () => {
    await request(app).get('/roll')
        .expect((res) => {
          res.status.should.equal();
          res.text.should.match();
        });
  });

  // Test 2:
  //   Validate that it rolls a specified number of sides and replies correctly
  it('should return the expected "A die with specified-n sides..." result', async () => {
    await request(app).get('/roll?sides=13')
        .expect((res) => {
          res.status.should.equal();
          res.text.should.match();
        });
  });

  // Test 3:
  //   Validate that it saves to the database when a die is rolled
  it('should save the roll result on each roll', async () => {
    await request(app).get('/roll?sides=13')
        .expect(async (res) => {
          res.status.should.equal(200);
          res.text.should.match(/A die with 13 sides just rolled a/);

          // query database for result & perform assertions
          let rollResults = await db.any('SELECT * FROM roll_history;');
          // console.log(rollResults);
          rollResults.length.should.equal(1);

          // assert result
          const resultMessage = res.text;
          let rollMatch = resultMessage.match(/A die with 13 sides just rolled a (\d+)/);
          // console.log(rollMatch[1]);
          rollResults[0].result.should.equal(rollMatch[1]);
        });
  });

});
