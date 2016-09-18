var getUriQuery = require('../index');
var assert = require('assert');

describe('#getUriQuery()', function() {
    var testUri1 = 'www.google.com?search=where%20is%20my%20car';
    var testUri2 = '?search=where%20is%20my%20car';
    var testUri3 = 'search=where%20is%20my%20car';
    it('should return false if ? at the end of uri', function() {
        assert.equal(false, getUriQuery('//www.google.com?'));
    });
    it('should return {search:\'where is my car\'}', function () {
         assert.equal('where is my car', getUriQuery(testUri1).search);
    });
    it('test: ' + testUri2, function () {
        assert.equal('where is my car', getUriQuery(testUri2).search);
    });
    it('test: ' + testUri3, function () {
        assert.equal('where is my car', getUriQuery(testUri3).search);
    });
});
