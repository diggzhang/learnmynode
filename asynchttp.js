var http = require('http');
var urlA = process.argv[2],
    urlB = process.argv[3],
    urlC = process.argv[4];


var result = [];
http.get(urlA, function (response) {
    response.setEncoding('utf8');
    response.on('end', function (data) {
        result.push(data);
        http.get(urlB, function (response) {
            response.setEncoding('utf8');
            response.on('end', function (data) {
                result.push(data);
                http.get(urlC, function (response) {
                    response.setEncoding('utf8');
                    response.on('end', function (data) {
                        result.push(data);

                        console.log(result);
                    });
                });
            });
        });
    });
});
