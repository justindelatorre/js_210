sks if the user wants to determine the sum or the product of all 
 * numbers between 1 and the entered integer, inclusive.
 */

let input = Number(prompt('Please enter an integer greater than 0:'));
let operation = prompt('Enter "s" to compute the sum, or "p" to compute ' +
                       'the product.');

if (operation === 's') {
  let sum = 0;
  for (let number = 1; number <= input; number++) {
    sum += number;
  }
  console.log(`The sum of the integers between 1 and ${input} is ${sum}.`);
} else if (operation === 'p') {
  let product = 1;
  for (let number = 1; number <= input; number++) {
    product *= number;
  }
  console.log(`The product of the integers between 1 and ${input} is ` + 
              `${product}.`);
} else {
  console.log('That is not a valid operation.');
}
