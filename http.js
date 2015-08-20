var http = require("http")
var url = process.argv[2];

http.get(url, function (data) {
    data.setEncoding("utf-8");
    data.on("data", function (data) {
        console.log(data); 
    });
});

/*
────────────────────────────────────────────────────────────────────────────────
var http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
})

────────────────────────────────────────────────────────────────────────────────
*/
