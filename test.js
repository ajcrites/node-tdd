var request = require('superagent'),
    expect = require('expect.js');

describe('Suite zero', function () {
    it('should work', function (done) {
        expect(1).to.be.ok();
        done();
    });
});

describe('Suite one', function () {
    it('should work', function (done) {
        request.post('localhost:8080').end(function (res) {
            expect(res).to.exist;
            expect(res.status).to.equal(200);
            expect(res.text).to.contain('world');
            done();
        });
    });
});
