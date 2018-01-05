import React from "react";
import "./App.css";
import VisibleCurrentColorView from "../containers/VisibleCurrentColor";
import VisiblePaletteElement from "../containers/VisiblePaletteElement";

let paletteColors = ["red", "green", "blue", "yellow", "orange", "indigo",
                     "black", "white", "magenta", "gray", "olive", "navy",
                     "maroon", "aqua", "silver", "teal", "lime"];

const ColorPalette = () => (
    <div className="Palette">
        {paletteColors.map((color, index) =>
            <VisiblePaletteElement key={index} color={color}/>)}

        <VisibleCurrentColorView color="aliceblue" />
    </div>
);


export default ColorPalette;