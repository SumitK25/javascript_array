const filter = require("./filter.js")

const items = [1, 2, 3, 4, 5, 5];

const odd = (n) => {
    if (n % 2 == 1) {
        return true
    }
    else {
        return false
    }
}
const result = filter(items, odd)
console.log(result);
