// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// Answer:
// This program will log 7. The a variable used in myValue is a local variable
// and shadows the global variable a declared on the first line.
