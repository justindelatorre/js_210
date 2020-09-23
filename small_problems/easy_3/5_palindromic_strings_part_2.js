/* Write another function that returns true if the string 
 * passed as an argument is a palindrome, or false otherwise. 
 * This time, however, your function should be 
 * case-insensitive, and should ignore all non-alphanumeric 
 * characters. If you wish, you may simplify things by 
 * calling the isPalindrome function you wrote in the 
 * previous exercise.
 */

const UPPER_A = 'A'.charCodeAt(0);
const UPPER_Z = 'Z'.charCodeAt(0);
const LOWER_A = 'a'.charCodeAt(0);
const LOWER_Z = 'z'.charCodeAt(0);

function isAlphabetic(char) {
  let ascii = char.charCodeAt(0);
  return (ascii >= UPPER_A && ascii <= UPPER_Z) ||
         (ascii >= LOWER_A && ascii <= LOWER_Z);
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  let stripped = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (isAlphabetic(string[idx])) {
      stripped += string[idx];
    }
  }

  return isPalindrome(stripped.toLowerCase());
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
