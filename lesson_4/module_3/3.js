/* Write a function named unshift that accepts two arguments: an Array and a 
 * value. The function should insert the value at the beginning of the Array, 
 * and return the new length of the array. You will need a for loop for this 
 * problem.
 */

function unshift(array, toInsert) {
  array.length = array.length + 1
  for (let idx = array.length - 1; idx >= 0; idx--) {
    array[idx] = array[idx - 1];
  }

  array[0] = toInsert;
}

unshift([1, 2, 3], 0);
