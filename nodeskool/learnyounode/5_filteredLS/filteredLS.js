let fs = require('fs');
let path = require('path');

let filePath = process.argv[2];
let fileExt = process.argv[3];

fs.readdir(filePath, function(err, fileList) {
    if (err) return "Error: " + err;

    fileList.forEach(function(file) {
	if (path.extname(file) === "."+fileExt) {
	    console.log(file);
	}
    });
});
