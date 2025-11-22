fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

// [2]

fetch("https://jsonplfdsaaceholder.tyfdsapicode.com/tofdafdsados/fdsaf1")
  .then((response) => response.json())
  .catch((err) => console.log("Error!: " + err));
