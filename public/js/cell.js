var CellState = {
    Live: 0,
    Dead: 1
};

var Cell = function (state) {
    this.state = state || CellState.Live;
};

_.extend(Cell.prototype, {

    setStateTo: function (nextState) {
        this.state = nextState;
    }

});
