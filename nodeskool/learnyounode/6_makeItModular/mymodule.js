let fs = require('fs');
let path = require('path');

module.exports = function (dirName, fileExt, callback) {
    fs.readdir(dirName, function (err, fileList) {
	if (err) return callback(err);
	fileList = fileList.filter(function (file) {
	    return path.extname(file) === "."+fileExt;
	});
	callback(null, fileList);
    });
};
