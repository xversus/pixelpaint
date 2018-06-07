import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/App.css';

const PaletteElement = ({ color, onElemClick }) => (
  <div
    style={{ backgroundColor: color }}
    className='palette-element'
    onClick={() => onElemClick(color)}
  />
);

PaletteElement.propTypes = {
  color: PropTypes.string.isRequired,
  onElemClick: PropTypes.func.isRequired,
};

export default PaletteElement;
