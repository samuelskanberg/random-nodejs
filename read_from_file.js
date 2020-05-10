var fs = require('fs');

var array = fs.readFileSync('quotes.txt').toString().split("\n");

var first_line = array[0];
console.log("Size of array: "+array.length)
console.log("First line: "+first_line)
