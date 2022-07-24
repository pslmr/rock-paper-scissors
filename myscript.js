//IF player is rock and computer is paper THEN computer wins paper beats rock
//ELSE IF player is paper and computer is scissors THEN computer wins scissors beat paper
//ELSE IF player is scissors and computer is rock THEN computer wins rock beats scissors
// *vice-versa
//ELSE IF its a tie for same value
//ELSE invalid if choice not in the 3 given options

//get random value for computer
function getComputerChoice() {
  const compChoice = Math.floor(Math.random() * 3) + 1;
  return compChoice === 1 ? "rock" : compChoice === 2 ? "paper" : "scissors";
}

//play one round
function playRound(player, computer) {
  if (player === "rock" && computer === "paper") {
    return `You lose, paper beats rock! Player: ${player}, Computer: ${computer}.`;
  } else if (player === "paper" && computer === "scissors") {
    return `You lose, scissors beats paper! Player: ${player}, Computer: ${computer}.`;
  } else if (player === "scissors" && computer === "rock") {
    return `You lose, rock beats scissors! Player: ${player}, Computer: ${computer}.`;
  } else if (player === "rock" && computer === "scissors") {
    return `You win, rock beats scissors! Player: ${player}, Computer: ${computer}.`;
  } else if (player === "paper" && computer === "rock") {
    return `You win, paper beats rock! Player: ${player}, Computer: ${computer}.`;
  } else if (player === "scissors" && computer === "paper") {
    return `You win, scissors beat paper! Player: ${player}, Computer: ${computer}.`;
  } else if (player == computer) {
    return `It's a tie! Player: ${player}, Computer: ${computer}.`;
  } else {
    return `Choice Invalid! Player: ${player}, Computer: ${computer}.`;
  }
}

const playerSelect = prompt('Enter your play:  "Rock,paper or scissors" ', "").toLowerCase();
const computerSelect = getComputerChoice();

console.log(playRound(playerSelect, computerSelect));
