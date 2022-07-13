const reduceFile = require("../reduce")

const items = [1, 2, 3, 4, 5, 5];

result = reduceFile.reduce(items, (startingValue, CurrValue) => startingValue + CurrValue);
console.log(result);
