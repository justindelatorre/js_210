/* What does the code below log? Can you explain these results?
 */

const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

/* ANSWER:
 * The code logs 'Bob Bob'. Strings primitives are immutable, so calling
 * toUpperCase() on name returns 'BOB' but doesn't actually change the original
 * string.
 */
