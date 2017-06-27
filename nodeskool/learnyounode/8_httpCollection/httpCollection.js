let http = require('http');

let remoteURL = process.argv[2];
let buffer = "";

http.get(remoteURL, function (chunk) {
    chunk.setEncoding('utf8');
    
    chunk.on("data", function (chunk) {
        buffer += chunk;
    });
    
    chunk.on("end", function () {
	let res = buffer.split("").length;
	console.log(res+"\n"+buffer);
    });

    chunk.on("error", console.error);
}).on("error", console.error);
