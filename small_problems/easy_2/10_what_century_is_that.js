/* Write a function that takes a year as input and returns the 
 * century. The return value should be a string that begins with 
 * the century number, and ends with 'st', 'nd', 'rd', or 'th' as 
 * appropriate for that number.
 * 
 * New centuries begin in years that end with 01. So, the years 
 * 1901 - 2000 comprise the 20th century.
 */

/* Problem:
 * Write a function that takes a given year and returns a string
 * indicating which century the year is a part of.
 * 
 * Examples:
 * 2000 => "20th"
 * 2001 => "21st"
 * 5 => "1st"
 * 
 * Data Structures:
 * - Input: number
 * - Output: string
 * 
 * Rules:
 *   Explicit
 *   - New centuries begin in years that end in 01.
 *   Implicit
 *   - Centuries 11, 12, or 13 are suffixed with 'th',
 *     e.g., 11th, 12th, 13th, but not others ending in 11, 12,
 *     or 13, e.g., 211st, 212nd, 213rd.
 * 
 * Algorithm:
 * - Subprocess #1: Determine the century number.
 *   - If the given number:
 *     - Ends in '0', return the substring consisting of all
 *       the digits except the last two.
 *   - Else, return the substring consisting of all the digits
 *     except the last two, plus one.
 * - Subprocess #2: Determine the suffix (based on given number). 
 *   - If the number:
 *     - Is 11, 12, or 13 => 'th'
 *     - Ends with 1 => 'st'
 *     - Ends with 2 => 'nd'
 *     - Ends with 3 => 'rd'
 *     - Else => 'th'
 */

function getCenturySuffix(centuryNumber) {
  centuryString = String(centuryNumber);
  let suffix;
  if (centuryString.slice(-2) === '11' ||
      centuryString.slice(-2) === '12' ||
      centuryString.slice(-2) === '13') {
        suffix = 'th';
  } else if (centuryString.slice(-1) === '1') {
    suffix = 'st';
  } else if (centuryString.slice(-1) === '2') {
    suffix = 'nd';
  } else if (centuryString.slice(-1) === '3') {
    suffix = 'rd';
  } else {
    suffix = 'th'
  }

  return suffix;
}

function century(year) {
  let yearString = String(year);
  let result;
  if (yearString.length === 1) {
    result = 1;
  } else if (yearString.slice(-1) === '0') {
    result = yearString.slice(0, -2);
  } else {
    result = String(Number(yearString.slice(0, -2)) + 1);
  }

  return result + getCenturySuffix(result);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
