/* Go over the following program. What does it log to the console at lines 7,
 * 11, 15, and 19? Is it what you expected? Why or why not?
 */

const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}

/* ANSWER:
 * Line 7: logs 'Hello'
 * Line 11: no log
 * Line 15: logs 'World'
 * Line 19: logs '!'
 *
 * The first three variables defined are all truthy, and the last is not.
