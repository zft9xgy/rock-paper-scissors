/*
This function reutnr 'Rock', 'Paper' or 'Scissors' randomly.
*/

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3); // return 0,1,2
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      break;
  }
}

// Crear una funcion que juege una ronda
// Esta funcion acepta dos parametros playerSelection, computerSelection
// devuelve You win/lose + paper beat rock.

function singleRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();
const playerwin = ((playerSelection == 'rock' && computerSelection =='scissors') || (playerSelection =='paper' && computerSelection =='rock') || (playerSelection == 'scissors' && computerSelection == 'paper'))

   if (playerSelection == computerSelection) {
    // tie
    return `Its a Tie both got ${playerSelection}`;
   }else if (playerwin){
    // player player win
    return `Yoy win ${playerSelection} win against ${computerSelection}`;
   }else{
    // player player lose 
    return `You lose ${playerSelection} lost against ${computerSelection}`;
   }

}