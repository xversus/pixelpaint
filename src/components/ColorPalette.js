import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import arrowDown from "../resources/arrow-down.png";
import arrowUp from "../resources/arrow-up.png";
import VisibleCurrentColorView from "../containers/VisibleCurrentColor";
import VisiblePaletteElement from "../containers/VisiblePaletteElement";

let paletteColors = ["red", "green", "blue", "yellow", "orange", "indigo",
                     "black", "white", "magenta", "gray", "olive", "navy",
                     "maroon", "aqua", "teal", "lime"];

const ColorPalette = ({onHideClick, visibility}) => (
    <div>
        <img alt="Hide the palette"
             src={visibility === "none" ? arrowUp : arrowDown}
             onClick={() => onHideClick()}
        />
        <br/>
        <div className="Palette"
             style={{display: visibility}}>
            {paletteColors.map((color, index) =>
                <VisiblePaletteElement key={index} color={color} />)}
            <div className="verticalRule" />
            <VisibleCurrentColorView color="aliceblue" />
        </div>
    </div>
);

ColorPalette.propTypes = {
    onHideClick: PropTypes.func.isRequired,
    visibility: PropTypes.string.isRequired
};

export default ColorPalette;