function fib(n) {
  let arr = [0, 1];
  if (n <= 2) return 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

// to arrow function =>
const arrowFib = (n) => {
  let arr = [0, 1];
  if (n <= 2) return 2;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

// to Expresstion Fnction =>
const ExpresstionFib = function (n) {
  let arr = [0, 1];
  if (n <= 2) return 2;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};
console.log(fib(10), arrowFib(10), ExpresstionFib(10));
