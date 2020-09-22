/* Write a function named wordCount that takes a single String as an argument. 
 * The function should return an Object that contains the counts of each word 
 * that appears in the provided String. In the returned Object, you should use 
 * the words as keys, and the counts as values.
 */

function wordCount(string) {
  wordArray = string.split(' ');
  let newObj = {};

  for (let idx = 0; idx < wordArray.length; idx++) {
    let word = wordArray[idx];
    if (!newObj[word]) {
      newObj[word] = 0;
    }

    newObj[word] += 1;
  }

  return newObj;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }
