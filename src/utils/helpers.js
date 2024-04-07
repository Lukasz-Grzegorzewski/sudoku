const shuffleArray = (array) => {
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
}

const nonRepetitiveWord = (words) => {
  const shuffleWords = shuffleArray(words);
  for (let i = 0; i < shuffleWords.length; i++) {
    const element = shuffleWords[i];
    if (element.length === [...new Set(element)].length) {
      console.log("element found =>", element);
      return element;
    } else {
      console.log("element not found");
      return "";
    }
  }
};




const generateGrid = (word, type) => {

  const generateFirstRow = (firstRow, word) => {
    for (let i = 0; i < firstRow.length; i++) {
      const arrayFill = word.split('');
      for (let j = 0; j < firstRow.length; j++) {
        const randomLetter = arrayFill.splice(Math.floor(Math.random() * arrayFill.length), 1)[0];

        if (!firstRow.includes(randomLetter)) {
          firstRow[i] = randomLetter;
          continue;
        }
      }
    }
  }

  const subMatricesFromRow = (grid) => {
    const matrix = [];

    for (let i = 0; i < 3; i++) {
      const rows = grid.splice(0, 3);

      for (let j = 0; j < 3; j++) {
        const subMatrix = [];
        for (let j = 0; j < 3; j++) {
          subMatrix.push(rows[j].splice(0, 3));
        }
        matrix.push(subMatrix);
      }
    }
    return matrix;
  }

  const grid = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));

  // make the first row random
  generateFirstRow(grid[0], word);

  // Function to check if it's safe to place num at position (row, col)
  function isSafe(row, col, letter) {
    // Check if num is not already present in the current row, column, and sub-grid
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === letter || grid[i][col] === letter || grid[row - row % 3 + Math.floor(i / 3)][col - col % 3 + i % 3] === letter) {
        return false;
      }
    }
    return true;
  }

  // Function to solve Sudoku using backtracking
  function solveSudoku() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            const letter = word.charAt(num - 1);
            if (isSafe(row, col, letter)) {
              grid[row][col] = letter;
              if (solveSudoku()) {
                return true;
              }
              grid[row][col] = 0; // Backtrack
            }
          }
          return false; // No valid number found
        }
      }
    }
    return true; // Sudoku solved
  }

  solveSudoku();
  if (type === 'rows') return grid;
  else if (type === 'subMatrices') return subMatricesFromRow(grid);

};

export {
  nonRepetitiveWord,
  generateGrid
};
