import PropTypes from 'prop-types';
import SubMartixRow from './SubMartixRow';

function SubMatrix({ subMatrix }) {
  return (
    <div className='grid grid-cols-3 gap-1 outline outline-amber-700'>
      {subMatrix.map((subMatrixRow, rowIndex) => (
        <SubMartixRow key={rowIndex} subMatrixRow={subMatrixRow} />
      ))}
    </div>
  );
}

SubMatrix.propTypes = {
  subMatrix: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

export default SubMatrix;
