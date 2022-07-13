const file = require("../filter")

const items = [1, 2, 3, 4, 5, 5];

const even = (n) => {
    if (n % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

console.log(file.filter(items, even))
