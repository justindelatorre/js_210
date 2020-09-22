/* Identify the bug in the following code.
 */

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

/* ANSWER:
 * myObject[a] will throw an error because bracket notation requires
 * string values as a name reference (unless it's a number, which gets coerced
 * into a string).
 */
