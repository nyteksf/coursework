let fs = require('fs');


let file = fs.readFile(process.argv[2], 'utf8', function(err,dataChunk) {
    if (err) return "Threw error: " + err;
    console.log(dataChunk.split("\n").length-1);
});
