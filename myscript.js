//

function getComputerChoice() {
  const compChoice = Math.floor(Math.random() * 3) + 1;
  return compChoice === 1 ? "rock" : compChoice === 2 ? "paper" : "scissors";
}

const playerSelect = prompt('Enter your play:  "Rock,paper or scissors" ', "");
const computerSelect = getComputerChoice();
