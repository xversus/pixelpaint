import React, { Component } from 'react';
import './App.css';
import PaletteElement from './PaletteElement.js';

var currentColor = "aliceblue";

class ColorPalette extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "aliceblue"
        }

        this.buttonClicked = this.buttonClicked.bind(this);
        this.setState = this.setState.bind(this);
    };

    buttonClicked(event) {
         if(event.target.style.backgroundColor) {
             currentColor = event.target.style.backgroundColor;
             this.setState({ color: currentColor });
         }
    }

    render() {
        return (
            <div className="Palette" onClick={this.buttonClicked}>
                <PaletteElement color="red"/>
                <PaletteElement color="green"/>
                <PaletteElement color="blue"/>
                <PaletteElement color="yellow"/>
                <PaletteElement color="orange"/>
                <PaletteElement color="indigo"/>
                <PaletteElement color="black"/>
                <PaletteElement color="white"/>
                <PaletteElement color="magenta"/>
                <PaletteElement color="gray"/>
                <PaletteElement color="olive"/>
                <PaletteElement color="navy"/>
                <PaletteElement color="maroon"/>
                <PaletteElement color="aqua"/>
                <PaletteElement color="silver"/>
                <PaletteElement color="teal"/>
                <PaletteElement color="lime"/>

                <PaletteElement color={this.state.color} />
            </div>
        )
    }
}

export default ColorPalette;
export function getCurrentColor() {
    return currentColor;
}