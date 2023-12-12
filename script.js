const squares = document.querySelectorAll(".game-square");
const currentTurn = document.querySelector("#turn");
const restart = document.querySelector("#button--play-again");
const xScore = document.querySelector("#scoreboard-x");
const oScore = document.querySelector("#scoreboard--o");
const winCond = [
    [0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
// Starts game
clash()

function clash() {
    squares.forEach(cell => cell.addEventListener("click", squareClick));
    restart.addEventListener("click", restartGame);
    currentTurn.textContent = `${currentPlayer}'s turn`;
    running = true;
}
// function to react when a square on the page is clicked on
function squareClick() {
    const squareIndex = this.getAttribute("cellIndex");
    // if the page doesn't run or if there are empty squares, nothing happens
    if (options[squareIndex] != "" || !running) {
        return;
    }
    // two follow up functions
    updateSquare(this, squareIndex);
    winCheck();
}

function updateSquare(cell, index) {
    options[index] = currentPlayer;
    //Marks teh square cells with X's or O's
    cell.textContent = currentPlayer
}
