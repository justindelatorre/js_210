/* Build a program that randomly generates Teddy's age, and logs it to the
 * console. Have the age be a random number between 20 and 200 (inclusive).
 */

let min = 20;
let max = 200;
let difference = max - min;
let age = Math.floor(Math.random() * (difference + 1)) + min;

let string = `Teddy is ${age} years old!`;
console.log(string);
