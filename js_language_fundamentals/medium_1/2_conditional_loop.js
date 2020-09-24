/* The following program is expected to log each number between 
 * 0 and 9 (inclusive) that is a multiple of 3. Read through the 
 * code shown below. Will it produce the expected result? Why or 
 * why not?
 */

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

/* DESCRIPTION
 * On line 1, the variable i is declared and assigned to 0.
 * On line 2, a while loop is established, which requires
 * i to be less than 10 for the loop body to execute.
 * On line 3, an if statement is established. If dividing
 * i by 3 results in a remainder of 0, then the console will log
 * the current value of i. Otherwise, increment i by 1.
 * 
 * ANSWER
 * The program will not log multiples of 3. The value of i does
 * not increment after the if branch finishes executiing, so i
 * remains at 0 forever, resulting in an infinite loop that only
 * logs 0.
 */
