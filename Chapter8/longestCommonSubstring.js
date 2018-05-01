// dynamic solution
const findLongestSubstring2 = (wordOne, wordTwo) => {
  let max = 0
  let row = 0
  let column = 0
  let grid = new Array((wordOne.length + 1))
  if (wordOne === wordTwo) {
    return wordOne
  }
  for (let i = 0; i < wordOne.length + 1; i++) {
    grid[i] = new Array((wordTwo.length + 1))
    for (let j = 0; j < wordTwo.length + 1; j++) {
      grid[i][j] = 0
    }
  }
  for (let k = 0; k <= wordOne.length; k++) {
    for (let m = 0; m <= wordTwo.length; m++) {
      if (k === 0 || m === 0) {
        grid[k][m] = 0
      } else {
        if (wordOne[k - 1] === wordTwo[m - 1]) {
          grid[k][m] = grid[k - 1][m - 1] + 1
        } else {
          grid[k][m] = 0
        }
      }
      if (max < grid[k][m]) {
        max = grid[k][m]
        row = k
        column = m
      }
    }
  }
  let longestWord = wordOne.length >= wordTwo.length ? wordOne : wordTwo
  let subLen = 0
  let str = ''
  if (max === 0) {
    return
  } else if (max === 1) {
    return wordTwo[column - 1]
  } else {
    if (longestWord === wordOne) {
      subLen = row
    } else {
      subLen = column
    }
    let substringLen = subLen - max
    let i = substringLen
    while (i < subLen) {
      str += longestWord[i]
      i++
    }
  }
  return str
}
console.log(findLongestSubstring2('abbck', 'ambbcd'))
