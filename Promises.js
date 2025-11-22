// will get error if jQuery not install
const callAPI = (url) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      //  jQurey
      url,
      type: "GET",
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
};
callAPI("https://api.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// // [2]

const waitMs = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Waited ${ms} Milisecounds!`), ms);
  });
waitMs(5000)
  .then((message) => console.log(message))
  // if there thing went wronge
  .catch(console.log("There Somthing Wrong !"));
