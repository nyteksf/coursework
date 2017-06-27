let http = require('http');
let url = process.argv[2];

http.get(url, function (res) {
    let buffer = "";
    res.setEncoding('utf8');
    
    res.on("data", function (chunk) {
	buffer += chunk + "\n";
    });
    
    res.on("end", function () {
	console.log(buffer);     
    });

}).on("error", function (err) {
    console.log("Error thrown: " + err);
});
