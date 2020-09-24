/* What will each line of the following code return? Don't run 
 * the code until after you have tried to answer.
 */

// Example 1
console.log(false && undefined);

/* Answer / Explanation:
 * Returns false.
 * 
 * JS treats && logical expressions with at least one non-boolean
 * operand such that the expression returns the first value if
 * it is falsy, the second one otherwise.
 */

// Example 2
console.log(false || undefined);

/* Answer / Explanation:
 * Returns undefined.
 * 
 * For expressions with || and at least one non-boolean operand,
 * JS returns the first operand if its truthy, otherwise it
 * returns the second operand, even if the second operand is 
 * falsy.
 */

// Example 3
console.log((false && undefined) || (false || undefined));

/* Answer / Explanation:
 * (false) || (undefined) >>> Returns undefined.
 */

// Example 4
console.log((false || undefined) || (false && undefined));

/* Answer / Explanation
 * (undefined) || (false) >>> Returns false.
 */

// Example 5
console.log((false && undefined) && (false || undefined));

/* Answer / Explanation:
 * (false) && (undefined) >>> Returns false.
 */

// Example 6
console.log((false || undefined) && (false && undefined));

/* Answer / Explanation:
 * (undefined) && (false) >>> Returns undefined.
 * 
 * For expressions with && and at least one non-boolean operand,
 * JS returns the first operand if it can be converted to false,
 * otherwise it returns the second operand.
 */

// Example 7
console.log('a' || (false && undefined) || '');

/* Answer / Explanation:
 * 'a' || (false) || '' >>> 'a' || '' >>> Returns 'a'.
 */

// Example 8
console.log((false && undefined) || 'a' || '');

/* Answer / Explanation:
 * (false) || 'a' || '' >>> 'a' || '' >>> Returns 'a'.
 */

// Example 9
console.log('a' && (false || undefined) && '');

/* Answer / Explanation:
 * 'a' && (undefined) && '' >>> (undefined) && '' >>> Returns 
 * undefined.
 */

// Example 10
console.log((false || undefined) && 'a' && '');

/* Answer / Explanation:
 * (undefined) && 'a' && '' >>> (undefined) && '' >>> Returns 
 * undefined.
 */
