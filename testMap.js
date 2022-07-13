let { items } = require("../arrays")
const map =require("../map.js")


const double =  (ele)=>{
    return ele *2
}

console.log(map(items,double))

