import React, { Component } from 'react';
import './App.css';
import { getCurrentColor } from './ColorPalette.js';

class Cell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "aliceblue"
        };

        this.buttonClicked = this.buttonClicked.bind(this);
        this.setState = this.setState.bind(this);
    };

    buttonClicked() {
        this.setState({ color: getCurrentColor() });
    }

    render() {
        return (
            <button style={{backgroundColor: this.state.color}} className="Cell" onClick={this.buttonClicked} />
        );
    }
}

export default Cell;