/* Read through the code below. What values will be logged to the 
 * console? Can you explain these results?
 */

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);
console.log(languages.length);

languages.length = 4;
console.log(languages);
console.log(languages.length);

languages.length = 1;
console.log(languages);
console.log(languages.length);

languages.length = 3;
console.log(languages);
console.log(languages.length);

languages.length = 1;
languages[2] = 'Python';
console.log(languages);
console.log(languages[1]);
console.log(languages.length);

/* ANSWER / EXPLANATION
 * Line 6: logs ['JavaScript', 'Ruby', 'Python']
 * Line 7: logs 3
 * Line 10: logs ['JavaScript', 'Ruby', 'Python', <1 empty>]
 * Line 11: logs 4
 * Line 14: logs ['JavaScript']
 * Line 15: logs 1
 * Line 18: logs ['JavaScript', <2 empty>]
 * Line 19: logs 3
 * Line 23: logs ['JavaScript', <1 empty>, 'Python']
 * Line 24: logs undefined
 * Line 25: logs 3
 */
