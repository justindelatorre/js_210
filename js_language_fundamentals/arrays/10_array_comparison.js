/* The array comparison function that we implemented in the Arrays 
 * lesson (Alternate link if the previous link doesn't work) implicitly 
 * assumed that when comparing two arrays, any matching values must 
 * also have matching index positions. The objective of this exercise 
 * is to reimplement the function so that two arrays containing the 
 * same values—but in a different order—are considered equal. For 
 * example, [1, 2, 3] === [3, 2, 1] should return true.
 */

function areArraysEqual(array1, array2) {
  let firstArraySorted = array1.sort();
  let secondArraySorted = array2.sort();
  let longerLength = array1.length > array2.length ? array1.length : array2.length;

  for (let idx = 0; idx < longerLength; idx ++) {
    if (firstArraySorted[idx] !== secondArraySorted[idx]) {
      return false;
    }
  }

  return true;
}

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
areArraysEqual([1, 1, 1], [1, 1]);                     // false
areArraysEqual([1, 1], [1, 1]);                        // true
