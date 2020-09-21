/* Write a function named concat that accepts two Array arguments. The function 
 * should return a new Array that contains the values from each of the original 
 * Arrays.
 * 
 * You may use functions that were answers to previous practice problems to 
 * complete this problem, but do not use any built-in Array methods.
 */
function push(array, toAdd) {
  array[array.length] = toAdd;
}

function concat(firstArray, secondArray) {
  let result = [];

  for (let idx1 = 0; idx1 < firstArray.length; idx1++) {
    push(result, firstArray[idx1]);
  }

  for (let idx2 = 0; idx2 < secondArray.length; idx2++) {
    push(result, secondArray[idx2]);
  }

  return result;
}

concat([1, 2, 3], [4, 5, 6]);  
