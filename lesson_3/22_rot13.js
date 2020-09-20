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

const asciiUpperCaseA = 65;
const asciiUpperCaseZ = 90;
const asciiLowerCaseA = 97;
const asciiLowerCaseZ = 122;

function isUpperCaseChar(asciiCharacter) {
  return asciiCharacter >= 65 && asciiCharacter <= 90;
}

function isLowerCaseChar(asciiCharacter) {
  return asciiCharacter >= 97 && asciiCharacter <= 122;
}

function isUpperAndOverBound(asciiCharacter) {
  return isUpperCaseChar(asciiCharacter) && asciiCharacter > 90;
}

function isUpperAndOverBound(asciiCharacter) {
  return currentCharAscii > 90;
}

function isLowerAndOverBound(asciiCharacter) {
  return currentCharAscii > 122;
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
    
    if ((isUpperCase && isUpperAndOverBound(currentCharAscii)) ||
        (isLowerCase && isLowerAndOverBound(currentCharAscii))) {
      currentCharAscii -= 26;
    }
    result += String.fromCharCode(currentCharAscii);
  }

  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
