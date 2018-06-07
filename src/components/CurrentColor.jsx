import React from 'react';
import '../stylesheets/App.css';
import PropTypes from 'prop-types';

let anotherColorHandler;

const CurrentColor = ({
  color, onAnotherColorClick, onColorChange,
}) => (
  <div
    style={{ backgroundColor: color }}
    className='current-color-view'
    onClick={onAnotherColorClick}
  >
    <input
      type='color'
      ref={elem => {anotherColorHandler = elem;}}
      onInput={onColorChange}
      onChange={onColorChange}
    />
  </div>
);

CurrentColor.propTypes = {
  color: PropTypes.string.isRequired,
  onAnotherColorClick: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default CurrentColor;
export { anotherColorHandler };
