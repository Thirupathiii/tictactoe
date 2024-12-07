const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
const playerXScore = document.getElementById('player-x-score');
const playerOScore = document.getElementById('player-o-score');
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(cellIndex) {
    const cell = cells[cellIndex];
    if (cell.textContent === '' && gameActive) {
        cell.textContent = currentPlayer;
        if (checkWin()) {
            endGame(${currentPlayer} wins!);
        } else if (checkDraw()) {
            endGame('Draw!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            message.textContent = ${currentPlayer}'s turn;
        }
    }
}

