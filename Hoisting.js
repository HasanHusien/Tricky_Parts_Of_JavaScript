let char = "a";
if (true) {
  // console.log(char)  ReferenceError :Cannot access 'char' before initialization
  let char = "b";
}

let char2 = "a";
if (true) {
  console.log(char); // this will loging a
}

console.log(char); // unefined
var letter = "a";

// console.log(char);  ReferenceError :Cannot access 'char' before initialization
let word = "a";

// in function the interoreter load functions at memory before run
// so it diffrent about variables can log it  before initialization

console.log(squareNumber(4));
function squareNumber(num) {
  return num ** 2;
}
