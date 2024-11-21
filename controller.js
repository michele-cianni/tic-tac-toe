class TicTacToeController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        this.view.bindCellClick((row, col) => this.handleCellClick(row, col));
    }

    handleCellClick(row, col) {
        if (this.model.addMove(row, col)) {
            const gameStatus = this.model.checkGameOver();
            if (gameStatus) {
                this.updateView();
                this.view.displayMessage(gameStatus);
            } else {
                this.model.switchPlayer();
                this.updateView();
            }
        }
    }

    updateView() {
        this.view.renderBoard(this.model.cells);
        this.view.displayMessage(`Player ${this.model.currentPlayer}'s turn`);
    }
}
