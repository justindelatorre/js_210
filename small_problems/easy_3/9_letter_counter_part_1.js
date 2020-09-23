/* Write a function that takes a string consisting of one or more space 
 * separated words, and returns an object that shows the number of words of 
 * different sizes.
 * 
 * Words consist of any sequence of non-space characters.
 */

function wordSizes(string) {
  let wordArray = string.split(' ');
  let counts = {};

  if (string.length === 0) {
    return counts;
  }

  for (let idx = 0; idx < wordArray.length; idx++) {
    let len = String(wordArray[idx].length);
    if (Object.keys(counts).indexOf(len) === -1) {
      counts[len] = 1;
    } else {
      counts[len] += 1;
    }
  }

  return counts;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
