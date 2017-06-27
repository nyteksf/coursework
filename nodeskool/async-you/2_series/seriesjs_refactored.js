let http = require('http');
let series = require('async/series');

let url1 = process.argv[2], 
    url2 = process.argv[3];

series({
    requestOne: function (done) {
	fetchURL(url1, done);
    },
    requestTwo: function (done) {
	fetchURL(url2, done);
    },
}, function (err, receivedDataObj) {
    if (err) console.error;
    console.log(receivedDataObj);
});

function fetchURL (url, done) {
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
