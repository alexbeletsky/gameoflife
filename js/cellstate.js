var CellState = {
    Live: 0,
    Dead: 1,

    nextState: function (currentState, neighbours) {
        var nextState = currentState;

        if (neighbours < 2 || neighbours > 3) {
            nextState = CellState.Dead;
        } else if (currentState === CellState.Dead && neighbours === 3) {
            nextState = CellState.Live;
        }

        return nextState;
    }
};
