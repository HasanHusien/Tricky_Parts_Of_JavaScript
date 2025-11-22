const fib = function (n) {
  let arr = [0, 1];
  if (n <= 2) return 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

// IIFE's =>
let tenthFib = (function (n) {
  let arr = [0, 1];
  if (n <= 2) return 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
})(10);

console.log(tenthFib);
