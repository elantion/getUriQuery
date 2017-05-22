let getUriQuery = function (uri?:string):any {
    //get query string
    if(!uri){
        if(!window){
            throw new Error('Can\'t get uri without uri argument when not running in browser environment');
        }
        uri = window.location.href;
    }
    if(/\?$/.test(uri)){
        return {};
    }
    if(~uri.indexOf('?')){
        uri = uri.replace(/[^?]*\?/, '');
    }else{
        return {};
    }
    //get query
    let query:{[key:string]:any} = {};
    let arr = uri.split('&');
    arr.forEach(function (str) {
        let strArr = str.split('=');
        query[strArr[0]] = decodeURIComponent(strArr[1]);
    });
    return query;
};
export = getUriQuery;