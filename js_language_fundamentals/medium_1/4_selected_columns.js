/* The getSelectedColumns function selects and extracts specific 
 * columns to a new array. Currently, the function is not 
 * producing the expected result. Go over the function and the 
 * sample runs shown below. What do you think the problem is?
 */

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

/* ANSWER / EXPLANATION
 * Variables declared with var are scoped at the function level, so
 * the assignment to length for the iteration defined on line 11
 * for the inner loop affects the value for length on the iteration
 * defined on line 10. Doing so cuts short the full iteration, cutting
 * off the last item in each column retrieval.
 * 
 * To fix it, we need to declare the iterator variables with let,
 * which has block-level scope, allowing us to use two distinct length
 * variables, one in each loop.
 */
