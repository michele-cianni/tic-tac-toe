document.addEventListener('DOMContentLoaded', () => {
    const model = new TicTacToeModel();
    const view = new TicTacToeView();
    const controller = new TicTacToeController(model, view);
    controller.updateView();
});
