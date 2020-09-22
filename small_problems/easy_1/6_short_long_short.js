/* Write a function that takes two strings as arguments, determines the 
 * longer of the two strings, and then returns the result of concatenating 
 * the shorter string, the longer string, and the shorter string once again. 
 * You may assume that the strings are of different lengths.
 */

function shortLongShort(firstString, secondString) {
  let shortWord = firstString.length < secondString.length ? firstString : secondString;
  let longWord = firstString.length > secondString.length ? firstString : secondString;

  return shortWord + longWord + shortWord;
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
