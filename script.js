
/*
This function reutnr 'Rock', 'Paper' or 'Scissors' randomly.
*/

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3); // return 0,1,2
  switch (choice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
    default:
      break;
  }
}

