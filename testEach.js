const eachFile = require("./each.js")

const items = [1, 2, 3, 4, 5, 5];

eachFile.each(items, (element, index) => { console.log(element); })
