let cb = (sV, element) => {
  return sV + element;
};

const reduce =(elements, cb, startingValue)=>{
  let i;
  if (startingValue) {
    i = 0;
  } else {
    startingValue = elements[0];
    i = 1;
  }
  for (i; i < elements.length; i++) {
    startingValue = cb(startingValue, elements[i]);
  }
  return startingValue;
}

module.exports = {
  reduce,
  cb,
};
