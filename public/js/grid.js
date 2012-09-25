var Grid = function (options) {
    var defaults = { height: 2, width: 2};
    options = _.extend(defaults, options);
    
    this.initialize(options);
};

_.extend(Grid.prototype, {
    initialize: function (options) {
        _.bindAll(this);

        this.height = options.height;
        this.width = options.width;

        this.cells = [];
        _.each(_.range(this.height), function(y) {
            _.each(_.range(this.width), function (x) {
                this.cells.push(new Cell({ x: x, y: y}));
            }, this);
        }, this);
    },

    tick: function () {
        _.each(this.cells, this._setNextState);
        _.each(this.cells, this._switchToNextState);
    },

    _setNextState: function (cell) {
        var neighbours = _.filter(this.cells, neighbourOf(cell));
        var nextState = CellState.nextState(cell.state, neighbours.length);

        cell.setNextState(nextState);

        function neighbourOf (currentCell) {
            return function (otherCell) {
                return otherCell.state === CellState.Live && closeTo(otherCell, currentCell);

                function closeTo (otherCell, currentCell) {
                    var xDifference = Math.abs(currentCell.position.x - otherCell.position.x);
                    var yDifference = Math.abs(currentCell.position.y - otherCell.position.y);

                    return (xDifference !== 0 || yDifference !== 0) && (xDifference <= 1 && yDifference <= 1);
                }
            };
        }
    },

    _switchToNextState: function(cell) {
        cell.switchState();
    }

});
