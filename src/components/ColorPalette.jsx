import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';
import './App.css';
import VisibleCurrentColorView from '../containers/VisibleCurrentColor';
import VisiblePaletteElement from '../containers/VisiblePaletteElement';

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
        className="Palette"
        style={{ display: visibility }}
      >
        {
                    paletteColors.map(color =>
                        (<VisiblePaletteElement
                          key={color}
                          color={color}
                        />))
                }
        <div className="verticalRule" />
        <VisibleCurrentColorView color="aliceblue" />
      </div>
    </div>
  );
};


ColorPalette.propTypes = {
  onHideClick: PropTypes.func.isRequired,
  visibility: PropTypes.string.isRequired,
};

export default ColorPalette;
