/* Write a function that takes a sorted array of integers as an argument, and returns 
 * an array that includes all the missing integers (in order) between the first and 
 * last elements of the argument.
 */

function missing(arr) {
  missingElements = [];
  for (let seriesIdx = arr[0]; seriesIdx < arr[arr.length - 1]; seriesIdx++) {
    let isMissing = true;
    for (let arrIdx = 0; arrIdx < arr.length; arrIdx++) {
      if (arr[arrIdx] === seriesIdx) {
        isMissing = false;
      }
    }

    if (isMissing) {
      missingElements.push(seriesIdx);
    }
  }

  return missingElements;
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []
