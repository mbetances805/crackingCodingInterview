// recursive solution
const pathFinder = (grid, row, column, path) => {
  if (column < 0 || row < 0 || !grid[row][column]) {
    return 0
  }
  let isAtOrigin = row === 0 && column === 0
  if (isAtOrigin || pathFinder(grid, row, column - 1, path) || pathFinder(grid, row - 1, column, path)) {
    path.push([row, column])
    return 1
  }
  return 0
}

const getPath = (grid) => {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0
  }
  let path = []
  if (pathFinder(grid, grid.length - 1, grid[0].length - 1, path)) {
    return path
  }
  return null
}

// dynamic solution
const pathFinderDyn = (grid, row, column, path, failed) => {
  if (row < 0 || column < 0 || !grid[row][column]) {
    return 0
  }

  let isAtOrigin = row === 0 && column === 0

  if (failed.has([row, column])) {
    return 0
  }

  if (isAtOrigin || pathFinderDyn(grid, row - 1, column, path, failed) ||
      pathFinderDyn(grid, row, column - 1, path, failed)) {
    path.push([row, column])
    return 1
  }
  return 0
}
const getPathDyn = (grid) => {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0
  }
  let path = []
  let failed = new Set()
  if (pathFinderDyn(grid, grid.length - 1, grid[0].length - 1, path, failed)) {
    return path
  }
  return null
}

console.log(getPath([['X', 1, 1, 1],
                     [1, 1, 0, 1],
                     [1, 1, 1, 1]]))

console.log(getPathDyn([['X', 1, 1, 0],
                    [1, 1, 1, 1],
                    [1, 1, 1, 1]]))
