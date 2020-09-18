// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// Answer:
// This will log 'This is global'. Variables initialized and assigned without
// keywords are automatically scoped globally, so console.log() will be able
// to access myVar.
