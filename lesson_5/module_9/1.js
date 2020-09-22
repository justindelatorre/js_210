/* The Math methods that deal with angle measurements all expect and return 
 * values in radians instead of degrees. Mathematically, radians are easier to 
 * work with, so nearly all languages use radians for circle and arc 
 * calculations. To read more about radians, check out this article. Use the 
 * Math.PI property to create a function that converts radians to degrees.
 * 
 * Note: 1 radian = 57.2958 degrees OR pi radians = 180 degrees
 */

function radiansToDegrees(radians) {
  return radians / Math.PI * 180;
}

radiansToDegrees(1); // ~57.2958
