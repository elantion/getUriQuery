"use strict";
var getUriQuery = function (uri) {
    //get query string
    if (!uri) {
        if (!window) {
            throw new Error('Can\'t get uri without uri argument when not running in browser environment');
        }
        uri = window.location.href;
    }
    if (/\?$/.test(uri)) {
        return {};
    }
    if (~uri.indexOf('?')) {
        uri = uri.replace(/[^?]*\?/, '');
    }
    //get query
    var query = {};
    var arr = uri.split('&');
    arr.forEach(function (str) {
        var strArr = str.split('=');
        query[strArr[0]] = decodeURIComponent(strArr[1]);
    });
    return query;
};
module.exports = getUriQuery;
