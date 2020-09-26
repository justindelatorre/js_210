/* What does the following code log? Why is this so?
 */

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));

/* ANSWER / EXPLANATION
 * The program should log 40 and 45.
 * 
 * This code illustrates how closures work, specifically that
 * the totalPayable function continues to be able to access its
 * reference to the startingBalance variable and whatever the variable
 * points to at the time of invocation.
 */ 
