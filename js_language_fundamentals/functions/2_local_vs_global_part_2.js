// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// Answer:
// The program will log 'This is local', since the console.log() within the
// someFunction function uses the myVar in the function's local scope.
