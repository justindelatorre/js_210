/* The productOfSums function shown below is expected to return the 
 * product of the sums of two arrays of numbers. Read through the 
 * following code. Will it produce the expected result? Why or why not?
 */

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

/* ANSWER / EXPLANATION
 * The code won't run as expected; the total function does not have
 * an explicit return statement, so it will return undefined each time
 * it is called. As such, the productOfSums function will return
 * NaN since undefined times undefined is NaN.
 */
