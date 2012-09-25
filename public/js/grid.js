var Grid = function (options) {
    var defaults = { height: 2, width: 2};
    options = _.extend(defaults, options);
    
    this.initialize(options);
};

_.extend(Grid.prototype, {
    initialize: function (options) {
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
        _.each(this.cells, function (cell) {
            var neighbours = _.filter(this.cells, neighbourOf(cell));
            var nextState = CellState.nextState(cell.state, neighbours.length);

            cell.setState(nextState);

            function neighbourOf (currentCell) {
                return function (otherCell) {
                    var xDistance = Math.abs(currentCell.position.x - otherCell.position.x);
                    var yDistance = Math.abs(currentCell.position.y - otherCell.position.y);

                    return xDistance !== 0 && yDistance !== 0 ||;
                };
            }
        }, this);
    }
});
