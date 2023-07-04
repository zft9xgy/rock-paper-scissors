/*
Introducción de parametros
playerSelection -> deberá ser rock, paper, scissors
computerSelection -> auto
*/

// var playerSelection = prompt("Introduzca su eleccion:");
// console.log("Antes de la validación:" + playerSelection);
// playerSelection = validatePlayerSelection(playerSelection);
// console.log("Después de la validación:" + playerSelection);

// const computerSelection = getComputerChoice();
// playRound(playerSelection, computerSelection);

// function validatePlayerSelection(e) {
//   return e.toLowerCase().trim();
// }

/*
This function return 'Rock', 'Paper' or 'Scissors' randomly.
*/
function getComputerChoice() {
const choice = Math.floor(Math.random() * 3); // return 0,1,2
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

/* 
Crear una funcion que juege una ronda
Esta funcion acepta dos parametros playerSelection, computerSelection
devuelve You win/lose + paper beat rock.
*/
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  /* bool that us true is player win or false is lose*/
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
    console.log(`You lose ${playerSelection} lost against ${computerSelection}`);
    return `lose`;
  }
}

function game() {
  // se juega hasta que alguno de los dos jugadores llegue a 5
  var playerScore = 0;
  var computerScore = 0;
  var stopGame = false;
  var score = 'tie'; 

        do {
            // pedir al jugador su opción
            // play round
            score = playRound(prompt("Introduzca su eleccion:"),getComputerChoice());
            // actualizar score
            switch (score) {
                case 'win': ++playerScore; break;
                case 'lose': ++computerScore; break;            
                default: break;
            }
            stopGame = (playerScore == 5 || computerScore == 5);
            // comprobar score por si hay un ganador
                // stopgame = true
            // seguir con siguiente
            console.log('Player socre: ' + playerScore);
            console.log('Computer score: ' + computerScore);
            console.log('Stopgame variable: ' + stopGame);
            
        } while (!stopGame);
}
