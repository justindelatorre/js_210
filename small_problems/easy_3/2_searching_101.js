/* Write a program that solicits six numbers from the user, 
 * then logs a message that describes whether or not the sixth 
 * number appears amongst the first five numbers.
 */

let first = prompt('Enter the 1st number: ');
let second = prompt('Enter the 2nd number: ');
let third = prompt('Enter the 3rd number: ');
let fourth = prompt('Enter the 4th number: ');
let fifth = prompt('Enter the 5th number: ');
let sixth = prompt('Enter the last number: ');

let array = [first, second, third, fourth, fifth];

if (array.indexOf(sixth) === -1) {
  console.log(`The number ${sixth} does not appear in [${array}].`);
} else {
  console.log(`The number ${sixth} appears in [${array}].`);
}
