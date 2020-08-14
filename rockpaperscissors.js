var playerScore = 0;
var computerScore = 0;
var houseScore = 0;

function playerPlay() {
  let option = prompt("Select an option").toLowerCase();
  return option;
}
function computerPlay() {
  var rps = ["rock", "paper", "scissors"];
  var random = Math.floor(Math.random() * 3);
  return rps[random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    houseScore++;
    return "It's a draw";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    computerScore++;
    return "You Lose";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore++;
    return "You Win!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(computerPlay(), playerPlay()));
  }
  if (playerScore > computerScore) {
    console.log("You Win!");
  } else if (playerScore < computerScore) {
    console.log("You Lose");
  } else {
    console.log("Its a Draw!");
  }
}

console.log(game());
