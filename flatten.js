let det = (it) => {

  let n;
  if (!Array.isArray(it)) {
    n = it;
  } else {
    n = det(it[0]);
  }
  return n;
};

const flatten= elements=> {
  let empArr = [];
  for (let i = 0; i < elements.length; i++) {
    let n = det(elements[i]);
    empArr.push(n);
  }
  return empArr;
  
}

module.exports = flatten;
