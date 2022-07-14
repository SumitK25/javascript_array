function flatten(elements) {
    let returningArray = [];
    if (!elements) {
        return []
    }
    if (typeof elements === 'number') {
        returningArray.push(elements)
    }
    else {
        for (let index = 0; index < elements.length; index++) {
            returningArray = returningArray.concat(flatten(elements[index]))

        }
    }
    return returningArray;
}

module.exports = flatten;
