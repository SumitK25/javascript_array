const map = require("./map.js")
const items = [1, 2, 3, 4, 5, 5];
const double=(elem)=>{
    return elem*2
}

console.log(map(items,double))
