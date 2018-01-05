import React from "react";
import "./App.css";
import PropTypes from "prop-types";

const CurrentColorView = ({color}) => (
    <div style={{backgroundColor: color}} className="PaletteElement" />
);

CurrentColorView.propTypes = {
    color: PropTypes.string.isRequired
};

export default CurrentColorView;