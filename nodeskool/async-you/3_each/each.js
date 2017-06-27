let http = require('http');
let async = require('async');

let urlList = process.argv.slice(2);

async.each(urlList, function(url, callback) {
    http.get(url, function(res) {
        res.on('data', function (chunk) {});
        res.on('end', function(){
            callback(null);
        });
    }).on('error', function (err) { console.log(err); });
}, function(err) {
    console.log(err);
});

/*
async.each(urlList, function (url, callback) {
    http.get(url, function (res) {	
	res.on('data', function (chunk) {
        });
	res.on('end', function () {
	    callback(null);
        });	
    }).on('error', function(err) { callback(err); });    
}, function (err) { if (err) console.log(err); });
*/
