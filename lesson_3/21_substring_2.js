// This practice problem is similar to the previous one. This time though,
// both arguments are indices of the provided string. The following rules
// apply:
//
// - If both start and end are positive integers, start is less than end, and
// both are within the boundary of the string, return the substring from the 
// start index (inclusive), to the end index (NOT inclusive).
// - If the value of start is greater than end, swap the values of the two,
// then return the substring as described above.
// - If start is equal to end, return an empty string.
// - If end is omitted, the end variable inside the function is undefined.
// Return the substring starting at position start up through (and including)
// the end of the string.
// - If either start or end is less than 0 or NaN, treat it as 0.
// -If either start or end is greater than the length of the string, treat it
// as equal to the string length.

function substring(string, start, end) {
  if (start > end) {
    placeholder = start;
    start = end;
    end = placeholder;
  }

  let strLen = string.length;
  if (end === undefined) {
    end = strLen;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }
 
  if (start > strLen) {
    start = strLen;
  }

  if (end > strLen) {
    end = strLen;
  }

  let result = ''
  for (let idx = start; idx < end; idx++) {
    result += string[idx];
  }

  return result;
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"
