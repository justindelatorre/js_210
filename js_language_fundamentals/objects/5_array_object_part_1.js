/* What will the following code log to the console and why?
 */

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);
console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);

/* ANSWER:
 * Line 6: "a"
 * Line 7: undefined
 * Line 13: "d"
 * Line 14: 5
 * Line 15: ['a', 'b', 'c', 'f', '-1': d, e: 5]
 */
