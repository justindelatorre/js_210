i/* Write a function that takes a positive integer or zero
 * and converts it to a string representation. Extend 
 * that function by adding the ability to represent 
 * negative numbers. You may not use any of the standard 
 * conversion functions available in JavaScript, such as 
 * String(), Number.prototype.toString, or an expression 
 * such as '' + number. Your function should do this the 
 * old-fashioned way and construct the string by 
 * analyzing and manipulating the number.
 */

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(number) {
  let result = '';
  let unsignedNumber = number < 0 ? number * -1 : number;

  do {
    let remainder = unsignedNumber % 10;
    unsignedNumber = Math.floor(unsignedNumber / 10);

    result = DIGITS[remainder] + result;
  } while (unsignedNumber > 0);

  if (number < 0) {
    result = '-' + result;
  } else if (number > 0) {
    result = '+' + result;
  }

  console.log(result);
}

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"
