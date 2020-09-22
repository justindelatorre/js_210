/* Implement a function that takes a String as an argument and returns an object 
 * that contains a count of the repeated characters. repeatedCharacters does a 
 * bit more than simply count the frequency of each character: it determines the 
 * counts, but only returns counts for characters that have a count of 2 or 
 * more. It also ignores the case.
 */

function repeatedCharacters(string) {
  let count = {};
  let lowerCaseString = string.toLowerCase();

  for (let idx = 0; idx < string.length; idx++) {
    let currentChar = lowerCaseString[idx];
    if (Object.keys(count).indexOf(currentChar) === -1) {
      count[currentChar] = 1;
    } else {
      count[currentChar] += 1;
    }
  }

  for (let key in count) {
    if (count[key] < 2) {
      delete count[key];
    }
  }

  return count;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
