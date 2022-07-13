function find(elements, cb) {
    if (!elements || !cb) {
        return undefined
    }
    for (let index = 0; index < elements.length; index++) {
        if (cb(elements[index])) {
            return elements[index]
        }
    }
    return undefined
}

module.exports = {find}
