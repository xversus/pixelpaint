import React from 'react';
import './App.css';

function PaletteElement(props) {
        return (
            <div style={{backgroundColor: props.color}} className="PaletteElement" />
        );
}

export default PaletteElement;