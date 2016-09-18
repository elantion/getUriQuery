var getUriQuery = require('../index');
var assert = require('assert');
var isEmptyObject = require('is-empty-object');
var typeOf = require('type-of');

describe('#getUriQuery()', function() {
    var testUri1 = 'www.google.com?search=where%20is%20my%20car';
    var testUri2 = '?search=where%20is%20my%20car';
    var testUri3 = 'search=where%20is%20my%20car';
    var testUri4 = 'www.google.com';
    it('should return false if ? at the end of uri', function() {
        assert.equal(false, getUriQuery('//www.google.com?'));
    });
    it('test: ' + testUri1, function () {
         assert.equal('where is my car', getUriQuery(testUri1).search);
    });
    it('test: ' + testUri2, function () {
        assert.equal('where is my car', getUriQuery(testUri2).search);
    });
    it('test: ' + testUri3, function () {
        assert.equal('where is my car', getUriQuery(testUri3).search);
    });
    it('test: ' + testUri4, function () {
        var testQuery4 = getUriQuery(testUri4);
        assert.equal('object', typeOf(testQuery4));
        assert.equal(true, isEmptyObject(testQuery4));
    });
});
