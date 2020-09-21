/* Create a simple tip calculator. The program should prompt for a bill 
 * amount and a tip rate. The program must compute the tip, and then log 
 * both the tip and the total amount of the bill to the console. You can 
 * ignore input validation and assume that the user will put in numbers.
 */

let bill = Number(prompt('What is the bill?'));
let tipPercent = Number(prompt('What is the tip percentage?')) / 100;
let total = (Number(bill) * Number(tipPercent) + Number(bill)).toFixed(2);

console.log(`The tip is ${(tipPercent * bill).toFixed(2)}`);
console.log(`The total is ${total}`);
