/* Write a function that takes an array, and returns a new array with duplicate 
 * elements removed.
 */

function uniqueElements(arr) {
  let unique = [];
  for (let idx = 0; idx < arr.length; idx++) {
    let isExcluded = true;
    for (let uniqueIdx = 0; uniqueIdx < unique.length; uniqueIdx++) {
      if (arr[idx] === unique[uniqueIdx]) {
        isExcluded = false;
      }
    }

    if (isExcluded) {
      unique.push(arr[idx]);
    }
  }

  return unique;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]
