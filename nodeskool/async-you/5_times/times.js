let http = require('http');
let async = require('async');

let hostname = process.argv[2];
let port = process.argv[3];
let url = "http://"+hostname+":"+port;

let createUser = function (id, next) {
    "use strict";
    let post_opts = {
        hostname: hostname,
        port: port,
        method: "POST",
        path: "/users/create",
        headers: {"Content-Type": "text/plain"}
    };

    let req = http.request(post_opts, function (res) {
	res.on("data", function(chunk) {
        });

        res.on("end", function () {
            next(null);
        });
    }).on("error", function (err) {
        next(err);
    });
    
    let data = JSON.stringify({"user_id": id + 1});
    req.write(data);
    req.end();
};

async.series({
    post: function (callback) {
        "use strict";
        async.times(5, function (n, next) {
            createUser(n, function (err) { next(err); });
        }, function () { callback(null, "Data Stored"); });
    }, 
    get: function(callback) {
        "use strict";
        http.get(url + "/users", function(res) {
            let body = "";

	    res.setEncoding("utf8");

            res.on("data", function (chunk) {
                body += chunk;
            });

            res.on("end",  function (msg) {
                callback(null, body);
            });
        }).on("error", function (err) { callback(err); });
    }
}, function(err, users) {
           "use strict";
           if (err) { console.error(err); }
           console.log(users.get);
});
