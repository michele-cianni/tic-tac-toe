class TicTacToeModel {
    constructor() {
        this.cells = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = 'X';
        this.isGameOver = false;
    }

    addMove(row, col) {
        if (!this.isGameOver && this.cells[row][col] === null) {
            this.cells[row][col] = this.currentPlayer;
            return true;
        }
        return false;
    }

    checkGameOver() {
        if (this.isWinner(this.currentPlayer)) {
            this.isGameOver = true;
            return `${this.currentPlayer} wins!`;
        } else if (this.isBoardFull()) {
            this.isGameOver = true;
            return `Draw!`;
        }
        return null;
    }

    isWinner(player) {
        for (let i = 0; i < 3; i++) {
            if (this.cells[i][0] === player && this.cells[i][1] === player && this.cells[i][2] === player) return true;
            if (this.cells[0][i] === player && this.cells[1][i] === player && this.cells[2][i] === player) return true;
        }
        if (this.cells[0][0] === player && this.cells[1][1] === player && this.cells[2][2] === player) return true;
        if (this.cells[0][2] === player && this.cells[1][1] === player && this.cells[2][0] === player) return true;
        return false;
    }

    isBoardFull() {
        return this.cells.flat().every(cell => cell !== null);
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
}
