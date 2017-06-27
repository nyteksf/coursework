let async = require("async");
let http  = require("http");

let url = process.argv[2];
let numberWords = ["one", "two", "three"];

async.series({
    firstGet: function (callback) {
	let response = "";
        http.get(encodeURI(url + "?number=" + String(numberWords[0])), function (res) {
           res.on("data", function (chunk) { 
               response += chunk; 
           });

           res.on("end", function () {
               callback(null, response); 
           });
        }).on("error", function (err) { console.error(err); });        
    },
    secondGet: function (callback) {
        let response = "";
        http.get(encodeURI(url + "?number=" + String(numberWords[1])), function (res) {
           res.on("data", function (chunk) {
              response += chunk;
	   });

           res.on("end", function () {
               callback(null, response); 
           });
        }).on("error", function (err) { console.error(err) });
    },
    thirdGet: function (callback) {
        let response = 0;
        http.get(encodeURI(url + "?number=" + String(numberWords[2])), function (res) {
            res.on("data", function (chunk) {
                response += chunk;
            });

            res.on("end", function () {
                callback(null, response);
            });
        }).on("error", function (err) { console.error(err); });        
    }
}, function (err, numbersArray) {
    if (err) console.error(err);
    async.reduce(numbersArray, 0, function (memo, i, callback) {
        callback(null, memo + Number(i));
    }, function (err, sum) {
        if (err) console.error(err);
        console.log(sum);
    });
});
