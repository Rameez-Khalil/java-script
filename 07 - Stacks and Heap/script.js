// let name = "rameez";
// let name1 = name;

// //STACK - Value gets copied, hence change in one doesn't reflect in another.
// name1 = "rameez2";
// console.log(name1);
// console.log(name);

//HEAP - Actual value gets passed over.
let userOne = {
  name: "rameez",
  email: "rameez23@gmail.com",
};

let userTwo = userOne;

userTwo.email = "rameez@gmail.com";
console.log(userOne);
console.log(userTwo);
