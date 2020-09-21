/* Write a function lastIndexOf that accepts two arguments: an array and a 
 * value. The function returns the last index at which the value can be found 
 * in the array, or -1 if the value is not present.
 */

function lastIndexOf(array, value) {
  let lastIdx = -1;
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === value) {
      lastIdx = idx;
    }
  }

  return lastIdx;
}

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1
