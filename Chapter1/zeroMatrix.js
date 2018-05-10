// Write an algorithm such that if an element in MxN matrix is 0, its entire row and column are set to 0.

const zeroMatrix = (a) => {
  let found = [];

  for (let n = 0; n < a.length; n++) {
    let first = n;

    for (let m = 0; m < a[0].length; m++) {
      if (a[first][m] === 0) {
        found.push([first, m]);
      }
    }
  }

  for (let i = 0; i < found.length; i++) {
    let position = found[i];
    nullifyColumns(a, position[1]);
    nullifyRows(a, position[0]);
  }

  return a;
}

const nullifyRows = (a, xPosition) => {
  a[xPosition].fill(0);
}

const nullifyColumns = (a, yPosition) => {
  for (let j = 0; j < a.length; j++) {
    a[j][yPosition] = 0;
  }
}

const m = [[1, 2, 3, 4], [5, 6, 0, 8], [9, 0, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20]];

// console.log(zeroMatrix(m));

const zeroMatrix2 = (grid) => {
  let indexesZero = [];
  if (grid.length === grid[0].length) {
    throw new Error('Please pass a NxM matrix');
  }

  // looping through our grid to find zeros, and if found push to array
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === 0) {
        indexesZero.push([row, column]);
       }
    }
  }

  // loop through our array to update our grid
  for (let i = 0; i < indexesZero.length; i++) {
    let rowZero = indexesZero[i][0];
    let columnZero = indexesZero[i][1];
    for (let row = 0; row < grid.length; row++) {
      grid[row][columnZero] = 0;
    }

    for (let column = 0; column < grid[0].length; column++) {
      grid[rowZero][column] = 0;
    }
  }
  return grid;
};

console.log(zeroMatrix2(m));
