describe('cell spec', function () {

    var cell;

    describe('when cell is constructing', function () {

        beforeEach(function () {
            cell = new Cell();
        });

        it ('should exist', function () {
            expect(cell).toBeDefined();
        });

        it ('should have state', function () {
            expect(cell.state).toBeDefined();
        });

        it ('should have state default to live', function () {
            expect(cell.state).toBeDefined(CellState.Live);
        });
    
    });

    describe('when cell state is chaning', function () {

        beforeEach(function () {
            cell = new Cell();
            cell.setStateTo(CellState.Dead);
        });

        it ('should change state from on to another', function () {
            expect(cell.state).toEqual(CellState.Dead);
        });

    });

});