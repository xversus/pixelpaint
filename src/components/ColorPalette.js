import React from "react";
import "./App.css";
import CurrentColorController from "../containers/VisibleCurrentColor";
import PaletteElementController from "../containers/VisiblePaletteElement";

let paletteColors = ["red", "green", "blue", "yellow", "orange", "indigo",
                     "black", "white", "magenta", "gray", "olive", "navy",
                     "maroon", "aqua", "silver", "teal", "lime"];

const ColorPalette = () => (
    <div className="Palette">
        {paletteColors.map((color, index) =>
            <PaletteElementController key={index} color={color}/>)}

        <CurrentColorController color="aliceblue" />
    </div>
);


export default ColorPalette;