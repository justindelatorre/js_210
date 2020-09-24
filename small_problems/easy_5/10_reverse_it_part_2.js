/* Write a function that takes a string argument containing one or more 
 * words, and returns a new string containing the words from the string 
 * argument. All five-or-more letter words should have their letters in 
 * reverse order. The string argument will consist of only letters and 
 * spaces. Words will be separated by a single space.
 */

function reverseWords(string) {
  const stringArray = string.split(' ');
  let reversedArray = [];

  for (let idx = 0; idx < stringArray.length; idx++) {
    if (stringArray[idx].length >= 5) {
      reversedArray.push(stringArray[idx].split('').reverse().join(''));
    } else {
      reversedArray.push(stringArray[idx]);
    }
  }

  return reversedArray.join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
