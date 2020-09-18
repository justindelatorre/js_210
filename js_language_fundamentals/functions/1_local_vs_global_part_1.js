// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// Answer:
// The program should log 'This is global' since the myVar variable declared
// in someFunction isn't accessible globally.
