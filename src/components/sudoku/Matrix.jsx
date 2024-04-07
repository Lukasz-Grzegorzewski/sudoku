import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SubMatrix from './SubMatrix';
import { generateGrid } from '../../utils/helpers';

function Matrix({ word }) {
  const [matrix, setMatrix] = useState([]);

  useEffect(() => {
    /* 2 types of a matrix:
     * - 'rows' : 9x1
     * - 'subMatrices' : 3x3
     */
    if (word.length === 0) return;
    const newSudokuGrid = generateGrid(word, 'subMatrices');

    setMatrix(newSudokuGrid);
  }, [word]);

  return (
    <div className='grid grid-cols-3 gap-1'>
      {matrix.map((subMatrix, index) => (
        <SubMatrix key={index} subMatrix={subMatrix} />
      ))}
    </div>
  );
}

Matrix.propTypes = {
  word: PropTypes.string.isRequired,
};

export default Matrix;

// useEffect(() => {
//   if (word.length === 0) return;
//   const matrixFull = [];
//   for (let z = 0; z < 9; z++) {
//     const wordArray = word.split('');

//     const submatrix = [];
//     for (let i = 0; i < 3; i++) {
//       const row = [];
//       for (let j = 0; j < 3; j++) {
//         row.push(wordArray.shift());
//       }
//       submatrix.push(row);
//     }
//     matrixFull.push(submatrix);
//   }
//   setMatrix(matrixFull);
// }, [word]);
