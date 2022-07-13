const file = require("../flatten")

const nestedArray = [1, [2], [[3]], [[[4]]]];

console.log(file.flatten(nestedArray))
