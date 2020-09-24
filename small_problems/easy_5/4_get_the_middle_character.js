/* Write a function that takes a non-empty string argument, and returns 
 * the middle character(s) of the string. If the string has an odd length, 
 * you should return exactly one character. If the string has an even 
 * length, you should return exactly two characters.
 */

function centerOf(string) {
  const isOdd = string.length % 2 === 1;
  const midpoint = Math.ceil(string.length / 2) - 1;

  if (isOdd) {
    return string[midpoint];
  } else {
    return string[midpoint] + string[midpoint + 1];
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
