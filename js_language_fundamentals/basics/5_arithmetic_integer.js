/* Write a program that prompts the user for two positive integers, 
 * and then prints the results of the following operations on those 
 * two numbers: addition, subtraction, product, quotient, remainder, 
 * and power. Do not worry about validating the input.
 */

let first = prompt('Enter the first number: ');
let second = prompt('Enter the second number: ');

console.log(`${first} + ${second} = ${first + second}`);
console.log(`${first} - ${second} = ${first - second}`);
console.log(`${first} * ${second} = ${first * second}`);
console.log(`${first} / ${second} = ${first / second}`);
console.log(`${first} % ${second} = ${first % second}`);
console.log(`${first} ** ${second} = ${first ** second}`);
