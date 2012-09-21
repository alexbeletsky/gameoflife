var Game = {

    init: function (options) {
        this.grid = new Grid(options);
    },

    putCell: function (x, y, state) {
        this.grid.putCell(x, y, state);
    },

    getCell: function (x, y) {
        return this.grid.getCell(x, y);
    },

    nextStep: function () {
        var cells = this.grid.allCells();

        _.each(cells, function(currentCell) {
            var neighboursCount = getNeighboursCountFor(currentCell, cells);

            var nextCellState = getNextCellState(currentCell, neighboursCount);
            currentCell.cell.setStateTo(nextCellState);
        });

        function getNeighboursCountFor(currentCell, cells) {
            var neighboursCells = _.filter(cells, function (otherCell) {
                
                return isCloseTo(currentCell, otherCell);

                function isCloseTo(currentCell, otherCell) {
                    var yDistance = otherCell.y - currentCell.y;
                    var xDistance = otherCell.x - currentCell.x;

                    return (yDistance !== 0 || xDistance !== 0) && (yDistance >= 1 || xDistance >= 1);
                }
            });

            return neighboursCells.length;
        }

        function getNextCellState(currentCell, neighboursCount) {
            if (currentCell.cell.state === CellState.Dead && neighboursCount === 3) {
                return CellState.Live;
            } else if (neighboursCount < 2 || neighboursCount >= 3) {
                return CellState.Dead;
            }

            return currentCell.cell.state;
        }
    }
};