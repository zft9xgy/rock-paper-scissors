/* Declares global variables */
var playerScore = 0;
var computerScore = 0;

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

const playerChoices = document.querySelectorAll(".btn-selection");
playerChoices.forEach((choice) =>
	choice.addEventListener("click", (e) => playRound(e.target.value))
);

function enableButtons() {
	playerChoices.forEach((e) => (e.disabled = false));
}

function disableButtons() {
	playerChoices.forEach((e) => (e.disabled = true));
}

/*
This function return 'rock', 'paper' or 'scissors' randomly.
*/
function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3); // return 0,1,2
	switch (choice) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
		default:
			break;
	}
}

/* 
This a function that plays a round
*/
function playRound(playerSelection) {
	// Clean player selection.
	playerSelection = playerSelection.toLowerCase().trim();
	const computerSelection = getComputerChoice();

	// boolean: is true if player win or false is player lose
	const playerwin =
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissors" && computerSelection == "paper");

	if (playerSelection == computerSelection) {
		// tie
		console.log(`Its a Tie both got ${playerSelection}`);
		return `tie`;
	} else if (playerwin) {
		// player player win
		console.log(`Yoy win ${playerSelection} win against ${computerSelection}`);
		++playerScore;
		updateScore();
		checkGame();
		return `win`;
	} else {
		// player player lose
		console.log(
			`You lose ${playerSelection} lost against ${computerSelection}`
		);
		++computerScore;
		updateScore();
		checkGame();
		return `lose`;
	}
}

/* This function is used at the end of the game() to declare a winner. */
function declareWinner() {
	const winner = playerScore == 5 ? "Player" : "Computer";
	console.log(`***${winner} won this game.***`);
	document.getElementById(
		"winner"
	).innerHTML = `***${winner} won this game.***`;
}

/*
The plays end when player or computer score reach 5. 
Declaration of variables inside the game function.
*/
function startGame() {
	playerScore = 0;
	computerScore = 0;
	updateScore();
	enableButtons();
	document.getElementById("winner").innerHTML = "";
}

/* Check if the there is a winner or not. */

function endGame() {
	declareWinner();
	disableButtons();
}

function isGameEnd() {
	return playerScore == 5 || computerScore == 5;
}

function checkGame() {
	if (isGameEnd()) {
		endGame();
	}
}

function updateScore() {
	playerScoreDisplay.innerHTML = `<h3>Your score: ${playerScore}</h3>`;
	computerScoreDisplay.innerHTML = `<h3>Comouter score: ${computerScore}</h3>`;
}
