require('../setup_test.js');

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
    const rollResult = await request(app).get('/roll?sides=13')
        .expect(async (res) => {
          res.status.should.equal(200);
          res.text.should.match(/A die with 13 sides just rolled a/);
        });

    // query database for result & perform assertions
    let rollHistories = await db.any('SELECT * FROM roll_history;');
    // console.log(rollHistories);
    rollHistories.length.should.equal(1);

    // assert result
    const resultMessage = rollResult.res.text;
    let rollMatch = resultMessage.match(/A die with 13 sides just rolled a (\d+)/);
    // console.log(rollMatch[1]);
    rollHistories[0].result.toString().should.equal(rollMatch[1]);
  });

});
