import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';
import '../stylesheets/App.css';
import CurrentColorControl from '../containers/CurrentColorControl';
import PaletteElementControl from '../containers/PaletteElementControl';

const paletteColors = ['red', 'green', 'blue', 'yellow', 'orange', 'indigo',
  'black', 'white', 'magenta', 'gray', 'olive', 'navy',
  'maroon', 'aqua', 'teal', 'lime'];

const ColorPalette = ({ onHideClick, visibility }) => {
  const icon = visibility === 'none' ?
    faAngleUp : faAngleDown;
  return (
    <div>
      <FontAwesomeIcon
        icon={icon}
        onClick={onHideClick}
      />
      <br />
      <div
        className='palette'
        style={{ display: visibility }}
      >
        {
                    paletteColors.map(color =>
                        (<PaletteElementControl
                          key={color}
                          color={color}
                        />))
                }
        <div className='vertical-rule' />
        <CurrentColorControl color='aliceblue' />
      </div>
    </div>
  );
};


ColorPalette.propTypes = {
  onHideClick: PropTypes.func.isRequired,
  visibility: PropTypes.string.isRequired,
};

export default ColorPalette;
