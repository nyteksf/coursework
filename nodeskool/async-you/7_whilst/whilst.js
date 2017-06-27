let async = require("async");
let http  = require("http");

let url = process.argv[2];
let latestRes = "";
let countReqs = 0;

async.whilst(function () {
    return latestRes !== "meerkat"; 
}, 
function (callback) {
    http.get(url, function (res) {
        res.setEncoding("utf8");
	countReqs++; 
	
	let body = "";
        res.on("data", function (chunk) {
            body += chunk;
        });

        res.on("end", function () {
            latestRes = body;
            callback();
        });
    }).on("error", function (err) { 
        return callback(err); 
    });
}, 
function(err) {
    if (err) console.error(err);
    console.log(countReqs);
});
