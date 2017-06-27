let http = require('http');
let async = require('async');

async.map(process.argv.slice(2), function (url, callback) {
    http.get(url, function (res) {
        res.setEncoding('utf8');
//        res.writeHead(200, {'Content-Type': 'text/plain'});
        
        let data = "";
    
        res.on('data', function (chunk) {
	    data += chunk;
        });
    
        res.on('end', function () {
    	    callback(null, data);
        });
    }).on('error', function (err) {
        callback(err);
    });
},  function (err, resArray) {
        if (err) { console.log(err); }
	console.log(resArray);   
   });
