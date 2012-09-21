describe('grid spec', function () {

    var grid;

    describe('when grid is constructing', function () {

        beforeEach(function () {
            grid = new Grid();
        });

        it ('should exist', function () {
            expect(grid).toBeDefined();
        });

        it ('should have height dimention', function () {
            expect(grid.height).toBeDefined();
        });

        it ('should have width dimention', function () {
            expect(grid.width).toBeDefined();
        });

    });

    describe('when grid is constructing with options', function () {

        beforeEach(function () {
            grid = new Grid({height: 4, width: 4});
        });

        it ('should have height dimention initialized', function () {
            expect(grid.height).toEqual(4);
        });

    });

    describe('when grid is requested with cell', function () {
        var cell;

        beforeEach(function () {
            grid = new Grid({height: 2, width: 2});
            grid.putCell(0, 0);
            cell = grid.getCell(0, 0);
        });

        it ('should return cell', function () {
            expect(cell).toBeDefined();
        });

    });

    describe('when grid is requested for all cells', function () {

        beforeEach(function () {
            grid = new Grid({height: 2, width: 2});

            grid.putCell(0, 0);
            grid.putCell(0, 1);
        });

        it ('should have two cells', function () {
            expect(grid.allCells().length).toEqual(2);
        });

    });

});