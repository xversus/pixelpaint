import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/App.css';

const Cell = ({ cellColor, cellId }) => (
  <button
    name={cellId}
    style={{ backgroundColor: cellColor }}
    className='cell'
  />
);

Cell.propTypes = {
  cellColor: PropTypes.string.isRequired,
  cellId: PropTypes.number.isRequired,
};

export default Cell;
