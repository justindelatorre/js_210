// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// Answer:
// This program will log 'This is local' because calling someFunction
// re-assigns myVar to 'This is local' since functions have access to variables
// in their outer scopes.
