// Given two strings, write a method to decide if one is a permutation of the other?
// Big O: O(n)
const string1 = 'Today is friday'
const string2 = 'disdyad'

const checkPermutation = (str1, str2) => {
  let longestStr = longestString(str1, str2)
  let shortestStr = shortestString(str1, str2)
  let hashMap1 = {}
  let counter = 0
  let shortCounter = 0
  for (var i = 0; i < longestStr.length; i++) {
    if (hashMap1[longestStr[i]]) {
      let longestCounter = hashMap1[longestStr[i]]
      ++longestCounter
      hashMap1[longestStr[i]] = longestCounter
    } else {
      hashMap1[longestStr[i]] = 1
    }
  }

  for (var j = 0; j < shortestStr.length; j++) {
    if (hashMap1[shortestStr[j]] === 0) {
      console.log('false')
      return false
    } else if (shortestStr[j] in hashMap1) {
      counter = hashMap1[shortestStr[j]]
      --counter
      hashMap1[shortestStr[j]] = counter
      shortCounter++
    }
  }

  if (shortCounter === shortestStr.length) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

const longestString = (str1, str2) => {
  if (str1.length > str2.length) {
    return str1
  } else {
    return str2
  }
}

const shortestString = (str1, str2) => {
  if (str1.length < str2.length) {
    return str1
  } else {
    return str2
  }
}

checkPermutation(string1, string2)
