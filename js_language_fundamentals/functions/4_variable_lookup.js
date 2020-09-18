// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// Answer:
// This program should log 'This is global'. First, JS looks for a local
// variable myVar within someFunction, but finds none, so looks globally.
