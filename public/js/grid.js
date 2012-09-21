var Grid = function (options) {
    options = options || {};
    options = _.extend({ height: 0, width: 0}, options);
    this.height = options.height || 0;
    this.width = options.width || 0;

    this.cells = [];
};

_.extend(Grid.prototype, {

    putCell: function (x, y, state) {
        state = state || CellState.Live;
        this.cells.push({ cell: new Cell(state), x: x, y: y});
    },

    getCell: function (x, y) {
        var found = _.find(this.cells, function (cell) {
            return cell.x === x && cell.y === y;
        });

        return found.cell;
    },

    allCells: function () {
        return this.cells;
    }

});