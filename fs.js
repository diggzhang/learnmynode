/* invoke into fs
 * */
var fs = require('fs');
var file = process.argv[2];

// read file
content = fs.readFileSync(file);
// convert to string
content = content.toString();
// split it to array
content = content.split('\n');
// length of array
console.log(content.length - 1);
