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
    await request(app).get('/roll?sides=13')
        .expect((res) => {
          res.status.should.equal();
          res.text.should.match();

          // query database for result & perform assertions
        });
  });

});
