/* Write a function that takes an array of arrays as an argument, and returns a new 
 * array that contains the sums of each of the sub-arrays.
 */

function matrixSums(arr) {
  let sumsArr = [];
  for (let arrNum = 0; arrNum < arr.length; arrNum++) {
    let sum = 0;
    for (let idx = 0; idx < arr[arrNum].length; idx++) {
      sum += arr[arrNum][idx];
    }
    sumsArr.push(sum);
  }

  return sumsArr;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]
