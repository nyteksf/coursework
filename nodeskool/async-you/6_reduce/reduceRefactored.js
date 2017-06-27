let async = require("async");
let http  = require("http");
let url = process.argv[2];
let numbersAsWords = ["one", "two", "three"];

async.reduce(numbersAsWords, 0, function(memo, num, callback) {
    http.get(url + "?number=" + num, function (res) {
        let body = "";
        res.setEncoding("utf8");

        res.on("data", function (chunk) {
            body += chunk;
        });

        res.on("end", function () {
            callback(null, memo + Number(body));
        });
    }).on("error", function (err) {
        return console.error(err); 
    });
}, function (err, sum) {
    if (err) console.error(err);
    console.log(sum);
});
