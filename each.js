let { items } = require("../arrays")

let elements = items


// console.log(abc)


function each(elements){
  for(let i=0;i<elements.length;i++){
    console.log(elements[i],i)
  }
}

// each(elements)

module.exports=each