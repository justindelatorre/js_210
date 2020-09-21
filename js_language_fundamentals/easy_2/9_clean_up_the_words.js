/* Given a string that consists of some words and an assortment 
 * of non-alphabetic characters, write a function that returns 
 * that string with all of the non-alphabetic characters replaced 
 * by spaces. If one or more non-alphabetic characters occur in a 
 * row, you should only have one space in the result (i.e., the 
 * result string should never have consecutive spaces).
 */

const UPPER_A_ASCII_CODE = 65;
const UPPER_Z_ASCII_CODE = 90;
const LOWER_A_ASCII_CODE = 97;
const LOWER_Z_ASCII_CODE = 122;
const SPACE_ASCII_CODE = 32;

function isUpperCaseAscii(asciiCharCode) {
  return asciiCharCode >= UPPER_A_ASCII_CODE &&
         asciiCharCode <= UPPER_Z_ASCII_CODE;
}

function isLowerCaseAscii(asciiCharCode) {
  return asciiCharCode >= LOWER_A_ASCII_CODE &&
         asciiCharCode <= LOWER_Z_ASCII_CODE;
}

function isAlphabeticAscii(asciiCharCode) {
  return isUpperCaseAscii(asciiCharCode) ||
         isLowerCaseAscii(asciiCharCode)
}

function cleanUp(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx++) {
    asciiCharCode = string[idx].charCodeAt(0);
    if (isAlphabeticAscii(asciiCharCode)) {
      result += string[idx];
    } else if (result[result.length - 1] !== ' ') {
      result += ' ';
    }
  }

  return result;
}

cleanUp("---what's my +*& line?");    // " what s my line "
