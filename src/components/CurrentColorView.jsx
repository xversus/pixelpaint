import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

let anotherColorHandler;

const CurrentColorView = ({
  color, onAnotherColorClick, onColorChange,
}) => (
  <div
    style={{ backgroundColor: color }}
    className="CurrentColorView"
    onClick={onAnotherColorClick}
  >
    <input
      type="color"
      ref={elem => {anotherColorHandler = elem;}}
      onInput={onColorChange}
      onChange={onColorChange}
    />
  </div>
);

CurrentColorView.propTypes = {
  color: PropTypes.string.isRequired,
  onAnotherColorClick: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default CurrentColorView;
export { anotherColorHandler };
