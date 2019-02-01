const assert = require('chai').assert;
const app = require('../app');

// start of the test
describe('App', function() {
    it('app should return hello', function() {
        assert.equal(app(), 'hello');
    });
});