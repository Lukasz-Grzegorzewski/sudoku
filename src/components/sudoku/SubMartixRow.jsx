import PropTypes from 'prop-types';

import Cell from './Cell';

function SubMartixRow({ subMatrixRow }) {
  return subMatrixRow.map((cell, cellIndex) => (
    <Cell key={cellIndex} cell={cell} />
  ));
}

SubMartixRow.propTypes = {
  subMatrixRow: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default SubMartixRow;
