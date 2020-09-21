/* Write a function named shift that accepts one argument: an Array. The 
 * function should remove the first value from the beginning of the Array and 
 * return it.
 */

function shift(array) {
  for (let idx = 0; idx < array.length - 1; idx++) {
    array[idx] = array[idx + 1];
  }

  array.length = array.length - 1;
}

let count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]
