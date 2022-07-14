const file = require("./flatten.js")

const nestedArray = [1, [2], [[3]], [[[4]]]];

const result=file(nestedArray,Infinity);
console.log(result);
