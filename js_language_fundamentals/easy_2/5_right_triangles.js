/* Write a function that takes a positive integer, n, as an argument, 
 * and logs a right triangle whose sides each have n stars. The 
 * hypotenuse of the triangle (the diagonal side in the images below) 
 * should have one end at the lower-left of the triangle, and the 
 * other end at the upper-right.
 */

function triangle(nStars) {
  for (let step = 1; step <= nStars; step++) {
    let output = '';
    for (let spaces = 1; spaces <= nStars - step; spaces++) {
      output += ' ';
    }
    
    for (let stars = 1; stars <= step; stars++) {
      output += '*';
    }
    
    console.log(output);
  }
}

triangle(5);
triangle(9);
