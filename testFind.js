const filter = require("./filter.js")

const items = [1, 2, 3, 4, 5, 5];

const even = (n) => {
    if (n % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

const result = filter(items, even)
console.log(result);
