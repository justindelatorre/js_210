/* Write a function that takes a string, doubles every consonant character 
 * in the string, and returns the result as a new string. The function 
 * should not double vowels ('a','e','i','o','u'), digits, punctuation, or 
 * whitespace.
 */

const CONSONANTS = [
  'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
  'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'
];

function doubleConsonants(string) {
  let doubled = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (CONSONANTS.includes(string[idx].toLowerCase())) {
      doubled += string[idx];
      doubled += string[idx];
    } else {
      doubled += string[idx];
    }
  }

  return doubled;
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
