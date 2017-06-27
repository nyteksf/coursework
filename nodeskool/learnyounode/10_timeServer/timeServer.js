let strftime = require('strftime');
let net = require('net');

let portNum = process.argv[2];

let zeroPad = function(i) {
    return (i < 10 ? "0" : "") + i;
};

let now = function() {
    let d = new Date();
    return  d.getFullYear() + "-" + zeroPad(d.getMonth()+1) + 
	    "-" + zeroPad(d.getDate()) + " " + zeroPad(d.getHours()) + 
	    ":" + zeroPad(d.getMinutes()) + "\n";
};

let server = net.createServer(function(socket) {
    socket.end(now());
});

server.listen(Number(portNum));

