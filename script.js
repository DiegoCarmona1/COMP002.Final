const squares = document.querySelectorAll(".game-square");
const currentTurn = document.querySelector("#turn");
const restart = document.querySelector("#button-play-again");
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
clash();

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
function alternate() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    currentTurn.textContent = `${currentPlayer}'s turn`;
}
function winCheck() {
    // Will change later in the function dependent on if a player won or not
    let winRound = false;
    for (let i = 0; i < winCond.length; i++) {
        // constants for teh indexes within the arrays for the successful answers\
        const condition = winCond [i];
        const squareA = options[condition[0]];
        const squareB = options[condition[1]];
        const squareC = options[condition[2]];
        // If there are spaces will continue along the code
        if (squareA == "" || squareB == "" || squareC == "") {
            continue;
        }
        // If the three squares match, you win
        if (squareA == squareB && squareB == squareC) {
            winRound = true;
            break;
        }
    }
    if (winRound) {
        // announces who won
        currentTurn.textContent = `${currentPlayer} wins!`;
        //stops the game by making running false
        running = false;
        scoreboard()
        // To establish a message if the game ends in a draw with all spaces filled and no matches
    } else if (!options.includes("")) {
        currentTurn.textContent = `Draw!`;
        running = false;
    } else {
        alternate()
    }
}   
// resets all elements and attributes to base settings
function restartGame() {
    currentPlayer = "X"
    options = ["", "", "", "", "", "", "", "", ""]
    currentTurn.textContent = `${currentPlayer}'s turn`;
    squares.forEach(cell => cell.textContent = "");
    running = true;
}