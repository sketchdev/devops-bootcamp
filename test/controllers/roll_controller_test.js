require('../setup_test.js');

describe('roll', async () => {

  // Test 1:
  //   Validate that it rolls a default number of sides and replies correctly
  it('should return the expected "A die with n sides..." result', async () => {
    await request(app).get('/roll')
        .expect((res) => {
          res.status.should.equal(200);
          res.text.should.match(/^A die with 6 sides just rolled a \d\./);
        });
  });

  // Test 2:
  //   Validate that it rolls a specified number of sides and replies correctly
  it('should return the expected "A die with specified-n sides..." result', async () => {
    for (let i = 0; i < 100; i++) {
      await request(app).get('/roll?sides=13')
          .expect((res) => {
            res.status.should.equal(200);
            res.text.should.match(/^A die with 13 sides just rolled a \d{1,2}\./);
            // console.log(res.text);
          });
    }
  });

  // Test 3:
  //   Validate that it saves to the database when a die is rolled
  it.skip('should save the roll result on each roll', async () => {
    await request(app).get('/roll?sides=13')
        .expect((res) => {
          res.status.should.equal();
          res.text.should.match();

          // query database for result & perform assertions
        });
  });

});
