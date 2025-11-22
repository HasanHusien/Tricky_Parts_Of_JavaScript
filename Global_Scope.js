var globalVar = "I am global!";

function concatString(str) {
  return str + " " + globalVar;
}
console.log(concatString("I am hungry!"));
