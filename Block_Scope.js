if (true) {
  var x = 2;
}
console.log(x); // it ,ill log couse var is not block

if (true) {
  let y = 2;
}
console.log(y); // ReferenceError: y is not defined couse let and const is block

var x;
if (false) {
  x = 2;
}
console.log(x); // undefined
