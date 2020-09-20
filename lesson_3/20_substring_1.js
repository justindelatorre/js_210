
n substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  if (length > string.length) {
    length = string.length - start;
  }

  let substring = ''
  for (let idx = start; idx < start + length; idx++) {
    substring += string[idx];
  }

  return substring;
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""
