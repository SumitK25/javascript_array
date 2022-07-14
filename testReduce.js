const reduceFile = require("./reduce.js")

const items = [1, 2, 3, 4, 5, 5];

const result = reduceFile(items, (accur, Curr) => accur + Curr);
console.log(result);
