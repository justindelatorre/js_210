/* Write a function that takes a string, doubles every character in the 
 * string, and returns the result as a new string.
 */

function repeater(string) {
  let repeated = '';
  for (let idx = 0; idx < string.length; idx++) {
    repeated += string[idx];
    repeated += string[idx];
  }

  return repeated;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
