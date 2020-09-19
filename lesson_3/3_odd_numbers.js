// Write a function that takes a positive integer as an argument, and logs all
// the odd numbers from 1 to the passed in number (inclusive). All numbers 
// should be logged on separate lines.
//
// TODO: 'Further Exploration'

function logOddNumbers(num) {
  for (let idx = 1; idx <= num; idx++) {
    if ((idx % 2) !== 0) {
      console.log(idx);
    }
  }
}

logOddNumbers(19);
