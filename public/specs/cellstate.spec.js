describe('cell state spec', function () {

    describe('when cell is changing state', function () {
        var state, neighbours = 0;

        describe('cell with no neighbours', function () {
            beforeEach(function () {
                state = CellState.nextState(CellState.Live, neighbours);
            });

            it ('should die', function () {
                expect(state).toEqual(CellState.Dead);
            });

            describe('for dead cell', function () {
                beforeEach(function () {
                    state = CellState.nextState(CellState.Dead, neighbours);
                });

                it ('should remain dead', function () {
                    expect(state).toEqual(CellState.Dead);
                });
            });

        });

        describe('cell with fewer than two live neighbours', function () {
            var neighbours = 1;

            beforeEach(function () {
                state = CellState.nextState(CellState.Live, neighbours);
            });

            it ('should die', function () {
                expect(state).toEqual(CellState.Dead);
            });

            describe('for dead cell', function () {
                beforeEach(function () {
                    state = CellState.nextState(CellState.Dead, neighbours);
                });

                it ('should remain dead', function () {
                    expect(state).toEqual(CellState.Dead);
                });
            });

        });

        describe('cell with two or three live neighbours', function () {
            var neighbours = 2;

            beforeEach(function () {
                state = CellState.nextState(CellState.Live, neighbours);
            });

            it ('should live for next generation', function () {
                expect(state).toEqual(CellState.Live);
            });

            describe('for dead cell', function () {
                beforeEach(function () {
                    state = CellState.nextState(CellState.Dead, neighbours);
                });

                it ('should remain dead', function () {
                    expect(state).toEqual(CellState.Dead);
                });
            });

        });

        describe('cell with two or three live neighbours', function () {
            var neighbours = 3;

            beforeEach(function () {
                state = CellState.nextState(CellState.Live, neighbours);
            });

            it ('should live for next generation', function () {
                expect(state).toEqual(CellState.Live);
            });

        });

        describe('cell with more than three live neighbours', function () {
            var neighbours = 4;

            beforeEach(function () {
                state = CellState.nextState(CellState.Live, neighbours);
            });

            it ('should die', function () {
                expect(state).toEqual(CellState.Dead);
            });

            describe('for dead cell', function () {
                beforeEach(function () {
                    state = CellState.nextState(CellState.Dead, neighbours);
                });

                it ('should remain dead', function () {
                    expect(state).toEqual(CellState.Dead);
                });
            });

        });

        describe('dead cell with exactly three live neighbours', function () {
            var neighbours = 3;

            beforeEach(function () {
                state = CellState.nextState(CellState.Dead, neighbours);
            });

            it ('should become a live cell, as if by reproduction', function () {
                expect(state).toEqual(CellState.Live);
            });

        });

    });

});