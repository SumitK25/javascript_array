const items = require("../arrays.js");
const find = require("../find.js");

let v = 2;

let k = find.find(items.items, find.cb, v);
console.log(k);
