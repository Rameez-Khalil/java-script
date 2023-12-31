//FETCH is an API that allows us to pull data from an external/internal source.
//FETCH returns a promise, and promise goes through several stages prior to fulfillment.

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((data) => console.log(data));
