// implement a method to perform basic string compression using the counts of repeated characters.
// if the compressed string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters.

const stringCompression = (str) => {
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

stringCompression('abzzzzzzcd');
