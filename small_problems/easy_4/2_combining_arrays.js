/* Write a function that takes two arrays as arguments, and returns an 
 * array containing the union of the values from the two. There should be 
 * no duplication of values in the returned array, even if there are 
 * duplicates in the original arrays. You may assume that both arguments 
 * will always be arrays.
 */

function union(firstArray, secondArray) {
  let concatArray = [...firstArray, ...secondArray];
  
  let unionArray = [];
  for (let idx = 0; idx < concatArray.length; idx++) {
    if (unionArray.indexOf(concatArray[idx]) === -1) {
      unionArray.push(concatArray[idx]);
    }
  }

  return unionArray;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
