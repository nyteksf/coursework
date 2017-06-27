var dir = process.argv[2];
var filetype = process.argv[3];
var printDir = require('./mymodule.js');

printDir (dir, filetype, function (err, files) {
    
    if (err) return "There was an error: " + err;
    
    files.forEach(function(file) {
        console.log(file);
    })

});
