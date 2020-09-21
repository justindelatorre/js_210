/* Write a function that takes a string argument, and returns a new 
 * string that contains the value of the original string with all 
 * consecutive duplicate characters collapsed into a single character.
 */

function crunch(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] !== string[idx - 1]) {
      result += string[idx];
    } else {
      continue;
    }
  }

  return result;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
