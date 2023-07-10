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
This function accepts two parameters playerSelection, computerSelection
return 'tie','win','lose'
*/
function playRound(playerSelection) {
	// Clean player selection. Validation is not done in this version.
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
		return `win`;
	} else {
		// player player lose
		console.log(
			`You lose ${playerSelection} lost against ${computerSelection}`
		);
		return `lose`;
	}
}

/* This function is used at the end of the game() to declare a winner. */
function declareWinner(winner, playerScore) {
	winner = playerScore == 5 ? "Player" : "Computer";
	console.log(`***${winner} won this game.***`);
}

/*
The plays end when player or computer score reach 5. 
Declaration of variables inside the game function.
*/
function game() {
	var playerScore = 0;
	var computerScore = 0;
	var stopGame = false;
	var score = "tie";
	var winner = "";

	do {
		// Ask user for choice and play a round in the same sentence.
		score = playRound(prompt("Introduzca su eleccion:"), getComputerChoice());
		// update score.
		switch (score) {
			case "win":
				++playerScore;
				break;
			case "lose":
				++computerScore;
				break;
			default:
				break;
		}
		// game stop boolen when one player reach score 5.
		stopGame = playerScore == 5 || computerScore == 5;

		// console results.
		console.log("Player score: " + playerScore);
		console.log("Computer score: " + computerScore);
	} while (!stopGame);

	declareWinner(winner, playerScore);
}
