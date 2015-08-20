var fs = require('fs');
var dir = process.argv[2];
var fileType = process.argv[3];

fs.readdir(dir, function (err, files) {
    if (err) {
        throw err; 
    }

    // count fiiles
    var lengthOfDir = files.length;

    var reg = new RegExp('\\.' + fileType + '$');
    
    for (var i = 0, l = lengthOfDir; i < l; i++) {
         if ( reg.test(files[i]) ) {
             console.log(files[i]);
         }
    }

});

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
        console.log(file)
    })
});
