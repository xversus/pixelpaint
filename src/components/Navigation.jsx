import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/App.css';

const Navigation = ({
  onClearClick, onSaveClick, onLoadClick,
}) => (
  <ul>
    <li>
      <button
        onClick={onClearClick}
        className='navigation-link'
      >
        Clear the canvas
      </button>
    </li>
    <li>
      <button
        onClick={onSaveClick}
        className='navigation-link'
      >
         Save the picture
      </button>
    </li>
    <li>
      <button
        onClick={onLoadClick}
        className='navigation-link'
      >
        Load the picture
      </button>
    </li>
  </ul>
);

Navigation.propTypes = {
  onClearClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onLoadClick: PropTypes.func.isRequired,
};

export default Navigation;
