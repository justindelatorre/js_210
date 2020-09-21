/* Write a function indexOf that accepts two arguments: an array and a value. 
 * The function returns the first index at which the value can be found, or -1 
 * if the value is not present.
 */

function indexOf(array, value) {
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === value) {
      return idx;
    }
  }

  return -1;
}

indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1
