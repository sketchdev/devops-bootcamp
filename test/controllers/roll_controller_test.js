const chai = require('chai');

global.app = require('../../app.js').app;
global.should = chai.should();
global.expect = chai.expect;
global.request = require('supertest');


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

});
