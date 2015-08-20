var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, data) {
    if (err) {
        throw err; 
    }

    // convert file into a array
    var array_data = data.toString().split('\n');
    // the last line of file is none
    console.log(array_data.length - 1);
});
