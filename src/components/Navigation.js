import React from "react";
import "./App.css";
import PropTypes from "prop-types";


const Navigation = ({onClearClick, onSaveClick, onLoadClick, onHideClick, onAnotherColorClick, onColorChange}) => (
    <ul>
        <li><button onClick={() => onClearClick()} className="navigationLink">Clear the canvas</button></li>
        <li><button onClick={() => onSaveClick()} className="navigationLink">Save the picture</button></li>
        <li><button onClick={() => onLoadClick()} className="navigationLink">Load the picture</button></li>
    </ul>
);


Navigation.propTypes = {
    onClearClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onLoadClick: PropTypes.func.isRequired
};

export default Navigation;