import React from "react";
import "./App.css";
import PropTypes from "prop-types";

const PaletteElement = ({color, onElemClick}) => (
    <div style={{backgroundColor: color}}
         className="PaletteElement"
         onClick={() => onElemClick(color) }/>
);

PaletteElement.propTypes = {
    color: PropTypes.string.isRequired,
    onElemClick: PropTypes.func.isRequired
};

export default PaletteElement;