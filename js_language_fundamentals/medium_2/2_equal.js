/* Read through the following code. Currently, it does not log the 
 * expected result. Explain why this happens, then refactor the code so 
 * that it works as expected.
 */

// ORIGINAL IMPLEMENTATION
// const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };

// console.log(person === otherPerson);    // false -- expected: true

// NEW IMPLEMENTATION
const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // false -- expected: true

/* ANSWER / EXPLANATION
 * The strict equality operator checks to see if two objects are the
 * same object, so to fix the original code, we need to assign
 * otherPerson to person so they point to the same object.
 */
