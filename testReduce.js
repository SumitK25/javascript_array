const items = require("../arrays.js");
const fn = require("../reduce.js");

let startValue = 0;

let k = fn.reduce(items.items, fn.cb, startValue);

console.log(k);
