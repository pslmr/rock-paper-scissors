//play one round
function playRound(player, computer) {
	if (player === "rock" && computer === "paper") {
		result.textContent = `You lose, paper beats rock! Player: ${player}, Computer: ${computer}.`;
		++computerScore;
	} else if (player === "paper" && computer === "scissors") {
		result.textContent = `You lose, scissors beats paper! Player: ${player}, Computer: ${computer}.`;
		++computerScore;
	} else if (player === "scissors" && computer === "rock") {
		result.textContent = `You lose, rock beats scissors! Player: ${player}, Computer: ${computer}.`;
		++computerScore;
	} else if (player === "rock" && computer === "scissors") {
		result.textContent = `You win, rock beats scissors! Player: ${player}, Computer: ${computer}.`;
		++playerScore;
	} else if (player === "paper" && computer === "rock") {
		result.textContent = `You win, paper beats rock! Player: ${player}, Computer: ${computer}.`;
		++playerScore;
	} else if (player === "scissors" && computer === "paper") {
		result.textContent = `You win, scissors beat paper! Player: ${player}, Computer: ${computer}.`;
		++playerScore;
	} else if (player == computer) {
		result.textContent = `It's a tie! Player: ${player}, Computer: ${computer}.`;
	} else {
		result.textContent = `Choice Invalid! Player: ${player}, Computer: ${computer}.`;
	}

	playerWins.textContent = `Player: ${playerScore}`;
	computerWins.textContent = `Computer: ${computerScore}`;

	validateScore();
}

//get random value for computer
function getComputerChoice() {
	const compChoice = Math.floor(Math.random() * 3) + 1;
	return compChoice === 1 ? "rock" : compChoice === 2 ? "paper" : "scissors";
}

//get moves for player
function getMoves() {
	let playerMove;
	if (this.classList.value === "btn rock") {
		playerMove = "rock";
	} else if (this.classList.value === "btn paper") {
		playerMove = "paper";
	} else {
		playerMove = "scissors";
	}

	if (playerScore === 5 || computerScore === 5) {
		return;
	}

	playRound(playerMove, getComputerChoice());
}

let playerScore = 0;
let computerScore = 0;
const body = document.querySelector("body");
const playerChoice = document.querySelectorAll(".btn");
const buttonContainer = document.querySelector(".action-container");
const textContainer = document.createElement("div");
const result = document.createElement("p");
const scoreBoard = document.createElement("div");
const playerWins = document.createElement("p");
const computerWins = document.createElement("p");
const winner = document.createElement("p");
const playAgain = document.createElement("button");

playerChoice.forEach((choice) => choice.addEventListener("click", getMoves));
playAgain.addEventListener("click", () => {
	result.textContent = "";
	playerWins.textContent = "";
	computerWins.textContent = "";
	winner.textContent = "";
	playerScore = 0;
	computerScore = 0;
	playAgain.remove();
	body.removeAttribute("class");
});

body.appendChild(textContainer);
body.appendChild(scoreBoard);
textContainer.appendChild(result);
scoreBoard.appendChild(playerWins);
scoreBoard.appendChild(computerWins);
scoreBoard.appendChild(winner);

playAgain.setAttribute("class", "btn restart");
winner.setAttribute("class", "winner-txt");
result.setAttribute("class", "result-txt");

//Score needs to be validated before ending the playround function to know if theres already a winner and to display play again button
const validateScore = () => {
	if (playerScore === 5) {
		winner.textContent = "You win, congratulations.";
		scoreBoard.appendChild(playAgain);
		playAgain.textContent = "Play Again?";
		body.setAttribute("class", "win");
		console.log();
	} else if (computerScore === 5) {
		winner.textContent = "You lost, better luck  next time.";
		scoreBoard.appendChild(playAgain);
		playAgain.textContent = "Play Again?";
		body.setAttribute("class", "lose");
		console.log();
	} else {
		return;
	}
};

//
//
//
//
// *Old code rps v.1(console only)*
//play 5 rounds
/*function game() {
	let winExp = /win/i;
	let tieExp = /tie/i;
	let loseCounter = 0;
	let winCounter = 0;

	for (let i = 1; i <= 5; i++) {
		playerSelect = prompt('Enter your play:  "Rock, paper or scissors" ', "").toLowerCase();
		computerSelect = getComputerChoice();
		console.log("ROUND " + i + ":" + playRound(playerSelect, computerSelect));
		let result = playRound(playerSelect, computerSelect).match(winExp);
		let resultTie = playRound(playerSelect, computerSelect).match(tieExp);
		if (result) {
			winCounter++;
		} else if (resultTie) {
		} else {
			loseCounter++;
		}
	}

	checkScore(winCounter, loseCounter);
}*/

//const playerSelect = prompt('Enter your play:  "Rock,paper or scissors" ', "").toLowerCase();
//const computerSelect = getComputerChoice();

//console.log(playRound(playerSelect, computerSelect));
//game();

/*Score check
function checkScore(score, compScore) {
	console.log(
		score == compScore
			? `It's a draw, both scored ${score}. :|`
			: score > compScore
			? `Congratulations you scored ${score}. You win this match. :)`
			: `You lose you only scored ${score}. Better luck next time. :(`
	);
}*/
