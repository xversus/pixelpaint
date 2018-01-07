import React from "react";
import "./App.css";
import PropTypes from "prop-types";

const Cell = ({onCellClick, cellColor, cellId}) => (
    <button style={{backgroundColor: cellColor}}
                   className="Cell"
                   onClick={() => onCellClick(cellId)} />
);

Cell.propTypes = {
    onCellClick: PropTypes.func.isRequired,
    cellColor: PropTypes.string.isRequired,
    cellId: PropTypes.number.isRequired
};

export default Cell;