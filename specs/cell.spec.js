describe('cell spec', function () {
    var cell;

    describe('when cell is constructing', function () {

        beforeEach(function () {
            cell = new Cell();
        });

        it ('should exist', function () {
            expect(cell).toBeDefined();
        });

    });

});