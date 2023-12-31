const asyncFunction = async () => {
  console.log("I've made the fetch call");
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const results = await data.json();
  console.log(results);
};

asyncFunction();
