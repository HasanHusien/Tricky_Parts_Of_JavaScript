// This function accepts a function and logs the time it takes for the function to execute.
const timeFn = function (fn) {
  const beginTime = performance.now();
  fn();
  const endTime = performance.now();
  console.log("Time took: ", endTime - beginTime);
};

timeFn(function () {
  for (let i = 0; i < 100000; i++) {}
});

// if i put in up like function declarations get
// ReferenceError: Cannot access 'timeFn' before initialization
// no hoistin on function expresstions
