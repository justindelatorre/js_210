/* Write a function named arraysEqual that takes two arrays as arguments. The 
 * function should return true if the arrays contain the same values, or false * if they do not.
 * 
 * Open Question: How should the function handle arrays with same values in differing order?
 */

function arraysEqual(firstArray, secondArray) {
  let firstLen = firstArray.length;
  let secondLen = secondArray.length;
  let longerLen = firstLen >= secondLen ? firstLen : secondLen;
  for (let idx = 0; idx < longerLen; idx++) {
    if (firstArray[idx] !== secondArray[idx]) {
      return false;
    }
  }

  return true;
}

arraysEqual([1], [1]);                               // true
arraysEqual([1], [2]);                               // false
arraysEqual([1, 2], [1, 2, 3]);                      // false
arraysEqual([1, 'hi', true], [1, 'hi', true]);       // true
arraysEqual([1, 'hi', true], [1, 'hi', false]);      // false
arraysEqual([1, 'hi', true], [1, 'hello', true]);    // false
arraysEqual([1, 'hi', true], [2, 'hi', true]);       // false
