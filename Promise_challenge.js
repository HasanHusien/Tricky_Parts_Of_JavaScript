const helloPromise = new Promise((resolve, reject) => {
  resolve("Hello");
});
const worldPromise = new Promise((resolve, reject) => {
  resolve("World");
});

// =>
helloPromise.then((msg1) => {
  worldPromise.then((msg2) => {
    console.log(msg1 + " " + msg2);
  });
});

// or
(async () => console.log((await helloPromise) + " " + (await worldPromise)))();
