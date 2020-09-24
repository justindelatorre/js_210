/* What will the following code snippets log?
 */

// SNIPPET 1
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

/* ANSWER / EXPLANATION
 * The above code should log 'The total value is 15'.
 * 
 * Based on the hoisting mental model, the counter function is declared 
 * and defined first, including the function body. Then the var 
 * variables counter and rate are declared and scoped at the global 
 * level.
 * 
 * Then, var variables counter and rate are assigned their respective
 * values, 5 and 3.
 * 
 * Finally, console.log is invoked and is passed a String 'The total 
 * * ...', and String(counter * rate) is concatenated to it. The value 
 * of counter is 5 and rate is 3, so the console logs 'The total value 
 * is 15'.
 */

// SNIPPET 2
function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

/* ANSWER / EXPLANATION
 * The snippet above should log 'The total value is NaN'.
 * 
 * Based on the hoisting mental model, the counter function is declared
 * and defined first alongside its function body. Then, the var 
 * variables counter and rate are declared and are assigned undefined 
 * values. Then console.log is invoked and is passed 'The total ...',
 * which is concatenated to the return value of calling the String() 
 * method on the result of multiplying counter and rate. At that point
 * in execution, they are both equal to undefined, so undefined times
 * undefined is NaN. As such, the String 'The total value is 
 * NaN' get logged.
 */

// SNIPPET 3
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

/* ANSWER / EXPLANATION
 * This code should log 'The total value is 15'.
 * 
 * Based on the hoisting mental model, the function counter is defined 
 * first. The var variables counter and rate are declared. At runtime
 * the variables counter and rate are assigned their respective values,
 * 5 and 3. Then console.log is invoked, which uses the most recently
 * assigned value of counter (5) in its String concatenated argument.
 */

// SNIPPET 4
let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

/* ANSWER / EXPLANATION
 * This code should throw an error because the name counter is used
 * for both a function and a let variable.
 */
