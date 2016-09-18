# getUriQuery
A function used for getting uri query

### Usage
```js
//browser url: http://www.google.com?search=where%20is%20my%20car
var query1 = getUriQuery();
var query2 = getUriQuery('search=where%20is%20my%20car');
var query3 = getUriQuery('www.google.com?search=where%20is%20my%20car');
//output: {search: 'where is my car'}
```

### License
MIT