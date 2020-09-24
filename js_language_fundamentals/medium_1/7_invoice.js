/* The invoiceTotal function in the code below computes the total 
 * amount for an invoice containing four "line items". How can you 
 * refactor the function so that it will work with invoices containing 
 * any number of line items?
 */

// Original Implementation
// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }

// New Implementation
function invoiceTotal(...amounts) {
  let sum = 0;
  for (let idx = 0; idx < amounts.length; idx++) {
    sum += amounts[idx];
  }

  return sum;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?
