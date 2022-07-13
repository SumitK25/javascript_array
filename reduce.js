function reduce(elements, cb, startingValue = elements[0]) {
    if (!elements || !cb || !Array.isArray(elements)) {
        return;
    }
    let value = startingValue;
    for (let index = 0; index < elements.length; index++) {

        value = cb(value, elements[index], index, elements)

    }
    return value
}

module.exports = {reduce}
