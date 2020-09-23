/* Modify the wordSizes function from the previous exercise to exclude
 * non-letters when determining word size. For instance, the word size of "it's"
 * is 3, not 4.
 */

function isAlphabetic(character) {
  const charLowerCase = character.toLowerCase();
  return charLowerCase >= 'a' && charLowerCase <= 'z'; 
}

function getAlphabeticLength(string) {
  let length = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (isAlphabetic(string[idx])) {
      length += 1;
    }
  }

  return length;
}

function wordSizes(string) {
  let wordArray = string.split(' ');
  let counts = {};

  if (string.length === 0) {
    return counts;
  }

  for (let idx = 0; idx < wordArray.length; idx++) {
    let len = String(getAlphabeticLength(wordArray[idx]));
    if (Object.keys(counts).indexOf(len) === -1) {
      counts[len] = 1;
    } else {
      counts[len] += 1;
    }
  }

  return counts;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}
