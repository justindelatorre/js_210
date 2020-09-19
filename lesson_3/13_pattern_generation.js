// Write a function that takes a number of rows as the 
// argument nStars and logs a square of numbers and 
// asterisks. For example, if nStars is 7, log the following 
// pattern:
//
// generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567
//
// TODO: 'Further Exploration'

function generatePattern(nStars) {
  for (let index = 1; index <= nStars; index++) {
    let output = '';

    for (let digits = 1; digits <= index; digits++) {
      output += String(digits);
    }

    for (let stars = index + 1; stars <= nStars; stars++) {
      output += '*';
    }
    
    console.log(output);
  }
}

generatePattern(7);
