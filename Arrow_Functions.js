// functions Expresstion
const expresstionFn = function (num) {
  return num * num;
};

// Arrow Function
const arrowFn = (num) => {
  return num * num;
};
console.log(arrowFn(10), expresstionFn(10));

// also in on line like that
// Not ! => this hire dosn't work Usually
const squierNum = (num) => num * num;
const margeStr = (str1, str2) => str1 + "" + str2;
