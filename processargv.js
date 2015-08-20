/*
 * [ 'node',
 *   '/Users/zhangxingze/code/node/learnyounode/processargv.js',
 *   '1',
 *   '2',
 *   '3' ]
 * */

var arrayArgv = process.argv;
var start = 2;
var sum = 0;
for (var i = start, l = arrayArgv.length; i < l; i ++) {
    sum = sum + Number(arrayArgv[i]);
}
console.log(sum);
