import PropTypes from 'prop-types';

function Cell({ cell }) {
  return <input className='bg-gray-200 text-center' value={cell} />
}

Cell.propTypes = {
  cell: PropTypes.string.isRequired,
};

export default Cell;
