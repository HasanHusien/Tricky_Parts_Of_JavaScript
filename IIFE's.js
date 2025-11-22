// Immediately Invoked Function Expression
// يعني: دالة بتتعمل وبتشتغل فورًا في نفس اللحظة
const twoSquared = (function squareNum(num) {
  return num * num;
})(2);
console.log(twoSquared);

function fibFactory(num) {
  return (function fib(n) {
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  })(num);
}
const tenthFib = fibFactory(10);
const fifteenthFib = fibFactory(15);
const twentiethFib = fibFactory(20);

console.log(tenth);
