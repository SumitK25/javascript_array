let { items } = require("../arrays");
const each = require("../each.js")
let elements=items


function cb(i){
    i(elements)
}

cb(each)





