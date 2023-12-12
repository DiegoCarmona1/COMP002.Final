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
]