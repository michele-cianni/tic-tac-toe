class TicTacToeView {
    constructor() {
        this.boardElement = document.getElementById('board');
        this.messageElement = document.getElementById('message');
    }

    renderBoard(cells) {
        const cellElements = this.boardElement.getElementsByClassName('cell');
        Array.from(cellElements).forEach((cell, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            cell.innerText = cells[row][col] || '';
        });
    }

    displayMessage(message) {
        this.messageElement.innerText = message;
    }

    bindCellClick(handler) {
        this.boardElement.addEventListener('click', (event) => {
            if (event.target.classList.contains('cell')) {
                const row = event.target.getAttribute('data-row');
                const col = event.target.getAttribute('data-col');
                handler(row, col);
            }
        });
    }
}
