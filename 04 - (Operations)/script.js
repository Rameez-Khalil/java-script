let value = 3;
let negativeVal = -3;
console.log(negativeVal);

//Joining the strings.
let string1 = "ramez";
let string2 = " khalil";

console.log(string1 + string2);

//TRICKY questions.
console.log("1" + 2);
console.log(1 + "2");

//if any of the value is string then all the values will be treated as string.

//since evaluation starts from left hand side, hence it will spit 122.
console.log("1" + 2 + 2);

//since evaluation starts from left hand side, hence it will spit 122.
console.log(1 + "2" + 2);

//since evaluation starts from left hand side, hence it will spit 32.
// ToPrimitive algorithm
console.log(1 + 2 + "2");

//Now true is getting converted back to 1. (NOT POSSIBLE AT THE END).
console.log(+true);

//THIS WILL SPIT 0
console.log(+"");

let referenceVar = "3";
console.log("Reference", ++referenceVar);
