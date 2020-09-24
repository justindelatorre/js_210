/* Write a function that takes one argument, a positive integer, and 
 * returns a list of the digits in the number.
 */

function digitList(integer) {
  let integerString = String(integer);
  let digits = [];
  for (let idx = 0; idx < integerString.length ; idx++) {
    digits.push(Number(integerString[idx]));
  }

  console.log(digits);
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
