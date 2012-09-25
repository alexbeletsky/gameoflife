describe('grid spec', function () {
    var grid;

    describe('when grid is constructing', function () {

        beforeEach(function () {
            grid = new Grid();
        });

        it ('should exist', function () {
            expect(grid).toBeDefined();
        });

        it ('should have default height', function () {
            expect(grid.height).toEqual(2);
        });

        it ('should have default width', function () {
            expect(grid.width).toEqual(2);
        });

        describe('with options', function () {

            beforeEach(function () {
                var options = {
                    height: 4,
                    width: 4
                };

                grid = new Grid(options);
            });

            it ('should exist', function () {
                expect(grid).toBeDefined();
            });

            it ('should have heigh', function () {
                expect(grid.height).toEqual(4);
            });

            it ('should have width', function () {
                expect(grid.width).toEqual(4);
            });

        });

    });

    describe('when cells are initialized', function () {

        beforeEach(function () {
            var options = {
                height: 4,
                width: 4
            };

            grid = new Grid(options);
        });

        it ('should have cells', function () {
            expect(grid.cells).toBeDefined();
        });

        it ('should have 16 cells for 4 x 4 grid', function () {
            expect(grid.cells.length).toEqual(16);
        });

        it ('should all cells be dead', function () {
            var allAlive = _.all(grid.cells, function(cell) {
                return cell.state === CellState.Dead;
            });
            expect(allAlive).toBe(true);
        });

        it ('should all cell have correct coordinates', function () {
            expect(grid.cells[0].position).toEqual({ x: 0, y: 0});
            expect(grid.cells[1].position).toEqual({ x: 1, y: 0});
            expect(grid.cells[2].position).toEqual({ x: 2, y: 0});
            expect(grid.cells[3].position).toEqual({ x: 3, y: 0});
            expect(grid.cells[4].position).toEqual({ x: 0, y: 1});
            expect(grid.cells[5].position).toEqual({ x: 1, y: 1});
            expect(grid.cells[6].position).toEqual({ x: 2, y: 1});
            expect(grid.cells[7].position).toEqual({ x: 3, y: 1});
            expect(grid.cells[8].position).toEqual({ x: 0, y: 2});
            expect(grid.cells[9].position).toEqual({ x: 1, y: 2});
            expect(grid.cells[10].position).toEqual({ x: 2, y: 2});
            expect(grid.cells[11].position).toEqual({ x: 3, y: 2});
            expect(grid.cells[12].position).toEqual({ x: 0, y: 3});
            expect(grid.cells[13].position).toEqual({ x: 1, y: 3});
            expect(grid.cells[14].position).toEqual({ x: 2, y: 3});
            expect(grid.cells[15].position).toEqual({ x: 3, y: 3});
        });
    });

    describe('when time is ticking', function () {

        describe('simple 4x4 grid with one live cell', function () {
            
            beforeEach(function () {
                var options = {
                    height: 4,
                    width: 4
                };

                grid = new Grid(options);
                grid.cells[0].setState(CellState.Live);
                grid.tick();
            });

            it ('should cell dead after tick', function () {
                expect(grid.cells[0].state).toEqual(CellState.Dead);
            });

            it ('should no new live cells born', function () {
                var born = _.any(grid.cells, function (cell) { return cell.state === CellState.Live; });
                expect(born).toBe(false);
            });
        });

    });

});