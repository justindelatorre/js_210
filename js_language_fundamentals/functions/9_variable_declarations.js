// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

console.log(a);

var a = 1;

// Answer:
// This program will log undefined. Due to hoisting, the a variable will first
// be initialized and assigned a undefined value (since it was declared with
// var). Then the console.log() will be executed using a's current value at
// that time. Then a is assigned to 1.
