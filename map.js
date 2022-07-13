let { items } = require("./arrays");

let elements = items;


function map(elements,cb){
  let er = [];
  for(let i=0;i<elements.length;i++){
    
    er.push(cb(elements[i]) )
  }
// console.log(er)
return er
}

// map(elements)

module.exports=map