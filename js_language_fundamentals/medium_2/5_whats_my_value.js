/* What will the following program log to the console? Can you explain 
 * why?
 */

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);
console.log(Object.keys(array).length);

array[-2] = 'Watermelon';
console.log(array.length);
console.log(Object.keys(array).length);

/* ANSWER / EXPLANATION
 * Line 8: logs 3
 * Line 9: logs 4
 * Line 12: logs 3
 * Line 13: logs 5
 * 
 * The length property of Arrays only considers indexes and not
 * non-index names / keys. Lines 7 and 11 establish new keys, but those
 * key are not non-negative integers, so are not counted as indexes.
 */
