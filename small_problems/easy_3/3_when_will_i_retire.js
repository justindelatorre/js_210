/* Build a program that logs when the user will retire and how 
 * many more years the user has to work until retirement.
 */

let currentAge = prompt('What is your age? ');
let retirementAge = prompt('At what age would you like to retire? ');
let difference = retirementAge - currentAge;

let today = new Date();
let year = today.getFullYear();
let retirementYear = year + difference;

console.log(`It's ${year}. You will retire in ${retirementYear}.`);
console.log(`You have only ${difference} years of work to go!`);
