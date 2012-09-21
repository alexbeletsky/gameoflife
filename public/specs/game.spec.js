describe('game spec', function () {

    describe('when game is initialing', function () {

        beforeEach(function () {
            Game.init();
        });

        it ('should create game field', function () {
            expect(Game.grid).toBeDefined();
        });

    });

    describe('when game is constructing with options', function () {

        beforeEach(function () {
            Game.init({ height: 4, width: 14});
        });

        it ('should create game field with dimentions', function () {
            expect(Game.grid.height).toEqual(4);
            expect(Game.grid.width).toEqual(14);
        });

    });

    describe('when cell are placed on game', function () {

        beforeEach(function () {
            Game.init({ height: 4, width: 4});
            Game.putCell(0, 2);
        });

        it ('should field have corresponding cell', function () {
            expect(Game.getCell(0, 2)).toBeDefined();
        });

    });

    describe('when game step is happen', function () {

        beforeEach(function () {
            Game.init({ height: 4, width: 4});
        });

        describe('live cell with fewer than two live neighbours', function () {

            beforeEach(function () {
                Game.putCell(0, 0);
                Game.nextStep();
            });

            it ('should cell die', function () {
                expect(Game.getCell(0, 0).state).toEqual(CellState.Dead);
            });

        });

        describe('live cell with fewer than two live neighbours', function () {

            beforeEach(function () {
                Game.putCell(0, 0);
                Game.putCell(0, 1);
                Game.nextStep();
            });

            it ('should cell die', function () {
                expect(Game.getCell(0, 0).state).toEqual(CellState.Dead);
            });

        });

        describe('live cell with two or three live neighbours lives on to the next generation', function () {

            beforeEach(function () {
                Game.putCell(0, 0);
                Game.putCell(0, 1);
                Game.putCell(1, 0);
                Game.nextStep();
            });

            it ('should cell live', function () {
                expect(Game.getCell(0, 0).state).toEqual(CellState.Live);
            });

            it ('rest cells should be dead', function () {
                expect(Game.getCell(0, 1).state).toEqual(CellState.Dead);
                expect(Game.getCell(1, 0).state).toEqual(CellState.Dead);
            });

        });

        describe('live cell with more than three live neighbours dies, as if by overcrowding', function () {

            beforeEach(function () {
                Game.putCell(0, 0);
                Game.putCell(0, 1);
                Game.putCell(1, 0);
                Game.putCell(1, 1);
                Game.nextStep();
            });

            it ('should die', function () {
                expect(Game.getCell(0, 0).state).toEqual(CellState.Dead);
            });
        });

        describe('dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', function () {

            beforeEach(function () {
                Game.putCell(0, 0, CellState.Dead);
                Game.putCell(0, 1);
                Game.putCell(1, 0);
                Game.putCell(1, 1);
                Game.nextStep();
            });

            it ('should live', function () {
                expect(Game.getCell(0, 0).state).toEqual(CellState.Live);
            });

        });

    });

});