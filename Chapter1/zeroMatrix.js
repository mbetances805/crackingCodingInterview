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

  const nullifyRows = (xPosition) => {
    a[xPosition].fill(0);
  }

  const nullifyColumns = (yPosition) => {
    for (let j = 0; j < a.length; j++) {
      a[j][yPosition] = 0;
    }
  }

  for (let i = 0; i < found.length; i++) {
    let position = found[i];
    nullifyColumns(position[1]);
    nullifyRows(position[0]);
  }

  return a;
}

const m = [[1, 2, 3, 4], [5, 6, 0, 8], [9, 0, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20]];

zeroMatrix(m);
