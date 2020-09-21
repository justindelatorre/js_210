/* Write a function that takes one argument, a positive integer, 
 * and returns a string of alternating '1's and '0's, always 
 * starting with a '1'. The length of the string should match 
 * the given integer.
 */

function stringy(number) {
  let binaryString = ''
  let addOne = true;
  
  for (let count = 0; count < number; count++) {
    if (addOne) {
      binaryString += '1';
      addOne = false;
    } else {
      binaryString += '0';
      addOne = true;
    }
  }

  return binaryString;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
