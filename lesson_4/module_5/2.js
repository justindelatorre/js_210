/* Write a function named splice that accepts three arguments: an Array, a 
 * start index, and the number of values to remove. The function should remove 
 * values from the original Array, starting with the first index and removing 
 * the specified number of values. The function should return the removed 
 * values in a new Array.
 * 
 * You may use functions that were answers to previous practice problems to 
 * complete this problem, but do not use any built-in Array methods.
 */

function push(array, toAdd) {
  array[array.length] = toAdd;
}

function splice(array, start, countToRemove) {
  let removedValues = [];
  for (let idx = start; idx < array.length; idx++) {
    if (idx < start + countToRemove) {
      push(removedValues, array[idx]);
    }

    array[idx] = array[idx + countToRemove];
  }

  array.length = array.length - removedValues.length;
  return removedValues;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
count;                                 // [ 1, 2, 8 ]
