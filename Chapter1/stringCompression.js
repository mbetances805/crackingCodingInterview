// implement a method to perform basic string compression using the counts of repeated characters.
// if the compressed string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters.

// First Solution
const stringCompression1 = (str) => {
  let compressedStr = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      compressedStr += str[i] + counter;
      counter = 1;
    }
  }

  if (str.length < compressedStr.length) {
    return str;
  } else {
    return compressedStr;
  }
}

stringCompression1('abzzzzzzcd');

// Second Solution
const stringCompression2 = (str) => {
  let newStr = '';
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    }

    if (str[i] !== str[i + 1]) {
      newStr += str[i] + counter;
      counter = 1;
    }
  }

  if (newStr.length > str.length) {
    return str;
  }

  return newStr;
}

stringCompression2('aabcccccaaa');
