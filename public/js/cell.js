var Cell = function (options) {
    var defaults = { state: CellState.Dead };
    options = _.extend(defaults, options);

    this.state = options.state;
    this.position = { x: options.x, y: options.y };
};

_.extend(Cell.prototype, {
    setState: function(state) {
        this.state = state;
    },

    setNextState: function (nextState) {
        this.nextState = nextState;
    },

    switchState: function () {
        this.state = this.nextState;
    }
});