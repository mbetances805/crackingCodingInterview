// n steps = 4
// 1 step, 2 steps, 3 steps
// how many way can the child run up the stairs

// n=  1       2         3                           4
// 1   1       11        111                         1111
// 2   1       11 or 2   111 or 21 or 12             1111 or 22 or 211 or 112 or 121
// 3   1       11 or 2   111 or 21 or 12 or 3        1111 or 22 or 211 or 112 or 31 or 13 or 121
// recursive solution
const tripleStep = (n) => {
  if (n < 0) {
    return 0
  }
  if (n === 0) {
    return 1
  }
  return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3)
}

console.log('tripleStep', tripleStep(10))

// dynamic solution
const tripleStepDyn = (n, memo = {}) => {
  if (n < 0) {
    return 0
  }
  if (n === 0) {
    return 1
  }
  if (memo[n]) {
    return memo[n]
  } else {
    memo[n] = tripleStepDyn(n - 1, memo) + tripleStepDyn(n - 2, memo) + tripleStepDyn(n - 3, memo)
    return memo[n]
  }
}

console.log('tripleStep', tripleStepDyn(10))
