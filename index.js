'use strict';
var getUriQuery = function (uri) {
    //get query string
    if(!uri){
        if(!window){
            console.error('Can\'t get uri without uri argument when not running in browser environment');
            return false;
        }
        uri = window.location.href;
    }
    if(/\?$/.test(uri)){
        console.error('Can not get query string when \'?\' at the end of uri.');
        return false;
    }
    if(~uri.indexOf('?')){
        uri = uri.replace(/[^?]*\?/, '');
    }
    if(!~uri.indexOf('=')){
        return {};
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
