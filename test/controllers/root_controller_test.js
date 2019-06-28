require('../setup_test.js');

describe('root_hello_world', async () => {
    it('should return the expected "Hello World" result', async () => {
        await request(app).get('/')
            .expect((res) => {
                res.status.should.equal(200);
                res.text.should.equal('Hello DevOps Bootcamp!');
            });
    });
});
