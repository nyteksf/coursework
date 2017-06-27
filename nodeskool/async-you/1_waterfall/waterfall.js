let http = require('http');
let async = require('async');
let fs = require('fs');

let filePath = process.argv[2];
let waterfall = require('async/waterfall');

waterfall([
    function grabURLFromFile (cb) {
        let url = fs.readFileSync(filePath).toString();
	cb(null, url);
    },
    function openURL (url, cb) {
	if (url) {
	    http.get(url, function (response) {
	        let body = "";
	        response.setEncoding('utf8');
	        response.on('data', function (chunk) {
	            body += chunk;
	        });
	        response.on('end', function () {
		    console.log(body);
	        });
		response.on('error', console.error);
	    }).on('error', console.error);
        }
    }
],      function (err, data) {
            if (err) console.error;
        });
