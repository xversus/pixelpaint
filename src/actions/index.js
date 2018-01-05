export const PAINT_CELL = "PAINT_CELL";
export const CHANGE_COLOR = "CHANGE_COLOR";

export const paintCell = (cellId) => {
    return {
        type: PAINT_CELL,
        cellId: cellId
    };
};

export const changeColor = (currentColor) => {
    return {
        type: CHANGE_COLOR,
        currentColor: currentColor
    };
};