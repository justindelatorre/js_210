// Write a function that returns a string converted to lowercase.

function toLowerCase(string) {
  let strLen = string.length;

  let result = ''
  for (let idx = 0; idx < strLen; idx++) {
    let asciiNumeric = string[idx].charCodeAt(0);
    if (asciiNumeric >= 65 && asciiNumeric <= 91) {
      asciiNumeric += 32;
      result += String.fromCharCode(asciiNumeric);
    } else {
      result += string[idx];
    }
  }

  return result;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"
