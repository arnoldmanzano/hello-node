var chai = require('chai');
var expect = chai.expect;

describe('Homepage', function() {
  it('should give a welcome message of "Hello Node!"', function(done) {
    browser
      .url('/')
      .getText('body', function(err, text) {
        expect(text).to.include('Hello Node!');
      })
      .call(done);
  });
});
