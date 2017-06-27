let http = require('http');
let fs = require('fs');

let portNum = process.argv[2];
let filePath = process.argv[3];

let server = http.createServer(function(req, res) {
    let fileContents = fs.createReadStream(filePath);
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    fileContents.pipe(res);    
});

server.listen(Number(portNum));
