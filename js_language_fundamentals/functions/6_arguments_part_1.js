// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// Answer:
// This program will log 7. The variable b incremented within the myValue
// function body is a local variable and doesn't increment the value assigned
// to the global variable a.
