/* Write a function that determines and returns the ASCII string value 
 * of a string passed in as an argument. The ASCII string value is the 
 * sum of the ASCII values of every character in the string.
 */

function asciiValue(string) {
  let asciiSum = 0;
  for (let idx = 0; idx < string.length; idx++) {
    asciiSum += string[idx].charCodeAt(0);
  }

  return asciiSum;
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0
