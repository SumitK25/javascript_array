let cb = (element) => {
  let a;
  element < 5 ? (a = true) : (a = false);
  return a;
};

const  filter=(elements, cb)=> {
  ss= [];
  for (let i = 0; i < elements.length; i++) {
    let a = cb(elements[i]);
    if (a) {
      ss.push(elements[i]);
    }
  }
  return ss;

}
module.exports.a = filter;
module.exports.b = cb;
