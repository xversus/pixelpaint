import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Cell = ({ onCellClick, cellColor, cellId }) => (
  <button
    style={{ backgroundColor: cellColor }}
    className="Cell"
    onClick={() => {
                onCellClick(cellId);
            }}
  />
);

Cell.propTypes = {
  onCellClick: PropTypes.func.isRequired,
  cellColor: PropTypes.string.isRequired,
  cellId: PropTypes.number.isRequired,
};

export default Cell;
