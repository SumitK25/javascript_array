function map(elements, cb) {
    if (!elements || !cb) {
        return []
    }
    let res = []
    for (let i = 0; i < elements.length; i++) {
        res[i] = cb(elements[i], i, elements)
    }
    return res;
}

module.exports = {map}
