let http = require('http');
let series = require('async/series');

let url1 = process.argv[2], 
    url2 = process.argv[3];

series({
    requestOne: function (done) {
	http.get(url1, function (response) {
	    let body = "";
	    response.setEncoding('utf8');

	    response.on('data', function (chunk) {
		body += chunk;
	    });

	    response.on('end', function () {
		setTimeout(function () {
		    done(null, body); 
		}, 200);
	    });
	}).on('error', function (err) { return "Error thrown: " + err; });
    },
    requestTwo: function (done) {
	http.get(url2, function (response) {
	    let body = ""; 
	    response.setEncoding('utf8');

	    response.on('data', function (chunk) {
		body += chunk;
	    });

	    response.on('end', function () {
		setTimeout(function () {
		    done(null, body);
		}, 100);
	    });
	}).on('error', function (err) { "Error thrown: " + err; });
    },
}, function (err, receivedDataObj) {
    if (err) console.error;
    console.log(receivedDataObj);
});

let fetchURL = function (url) {
    http.get(url, function (response) {
    	let body = "";
    	response.setEncoding('utf8');

    	response.on('data', function (chunk) {
            body += chunk;
        });

        response.on('end', function () {
            setTimeout(function () {
                done(null, body);
            }, 200);
    	});
    });
};
