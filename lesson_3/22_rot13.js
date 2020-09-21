
/* Rot13 ("rotate by 13 places") is a letter-substitution cipher that 
 * translates a String into a new String:
 * 
 * For each character in the original String:
 * 
 * - If the character is a letter in the modern English alphabet, change it to
 *   the character 13 positions later in the alphabet. Thus, a becomes n. If 
 *   you reach the end of the alphabet, return to the beginning. Thus, o becomes b.
 * - Letter transformations preserve case. A becomes N while a becomes n.
 * - Don't modify characters that are not letters.
 * 
 * Write a Function, rot13, that takes a String and returns that String
 * transformed by the rot13 cipher.
 */

const UPPER_A_ASCII = 'A'.charCodeAt(0);
const UPPER_Z_ASCII = 'Z'.charCodeAt(0);
const LOWER_A_ASCII = 'a'.charCodeAt(0);
const LOWER_Z_ASCII = 'z'.charCodeAt(0);

function isUpperCaseChar(asciiCharacter) {
  return asciiCharacter >= UPPER_A_ASCII && asciiCharacter <= UPPER_Z_ASCII;
}

function isLowerCaseChar(asciiCharacter) {
  return asciiCharacter >= LOWER_A_ASCII && asciiCharacter <= LOWER_Z_ASCII;
}

function isOverUpperBound(asciiCharacter) {
  return asciiCharacter > UPPER_Z_ASCII;
}

function isOverLowerBound(asciiCharacter) {
  return asciiCharacter > LOWER_Z_ASCII;
}

function rot13(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx++) {
    currentCharAscii = string[idx].charCodeAt(0);
    let isUpperCase = isUpperCaseChar(currentCharAscii);
    let isLowerCase = isLowerCaseChar(currentCharAscii);
    if  (isUpperCase || isLowerCase) {
      currentCharAscii += 13;
    }
    
    if ((isUpperCase && isOverUpperBound(currentCharAscii)) ||
        (isLowerCase && isOverLowerBound(currentCharAscii))) {
      currentCharAscii -= 26;
    }
    result += String.fromCharCode(currentCharAscii);
  }

  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
