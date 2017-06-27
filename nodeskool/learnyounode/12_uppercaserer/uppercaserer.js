let map = require('through2-map');
let http = require('http');

let portNum = Number(process.argv[2]);


http.createServer(function(req, res) {
    if (req.method !== 'POST') {
	return res.end("Error: Server only accepts POST requests. Try again.");	
    }
    req.pipe(map(function(chunk) {
	return chunk.toString().toUpperCase();
    })).pipe(res);
}).listen(portNum);
