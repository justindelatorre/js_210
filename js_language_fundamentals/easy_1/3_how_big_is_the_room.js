/* Build a program that asks the user to enter the length and width of a room in 
 * meters, and then logs the area of the room to the console in both square 
 * meters and square feet.
 * 
 * 1 square meter == 10.7639 square feet
 */

const squareFeetPerSquareMeter = 10.7639;

let lengthMeters = Number(prompt('Enter the length of the room in meters:'));
let widthMeters = Number(prompt('Enter the width of the room in meters:'));

let areaSquareMeters = lengthMeters * widthMeters;
let areaSquareFeet = areaSquareMeters * squareFeetPerSquareMeter;

console.log('The area of the room is ' + areaSquareMeters.toFixed(2) +
            ' square meters (' + areaSquareFeet.toFixed(2) +
            ' square feet).');
