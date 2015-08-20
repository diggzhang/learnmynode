var fs = require('fs');

module.exports = function (dirname, ext, callback) {

    var reg = new RegExp('\\.' + ext + '$');

    fs.readdir(dirname, function (err, files) {
         if (err) {
             callback(err, null);
         } else {
             result = [];
             files.forEach(function (entry) {
                 if ( reg.test(entry) ) {
                     result.push(entry);
                 }
             });

             callback(null, result);
         }
    });
};
