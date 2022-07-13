let cb = (element, k) => {
  let a;
  element === k ? (a = true) : (a = false);
  return a;
};

const find=(elements, cb, v)=> {
  for (let i = 0; i < elements.length; i++) {
    let a = cb(elements[i], v);
    if (a) {
      return elements[i];
    }
  }
}

module.exports = {
  find,
  cb,
};
