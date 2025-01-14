const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

playGame();

function getComputerChoice() {
    const random = Math.random();
    if (random < 1 / 3) {
        return ROCK;
    } else if (random < 1 / 2) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function getHumanChoice() {
    return prompt("rock, paper or scissors ?");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === null) {
            return;
        }

        const playerChoice = humanChoice.toLowerCase();

        if (playerChoice === computerChoice) {
            console.log("Tie!");
        } else if (playerChoice === ROCK) {
            if (computerChoice === PAPER) {
                console.log("You lose! Paper beats rock!");
                computerScore++;
            } else {
                console.log("You win! Rock beats scissors!");
                humanScore++;
            }
        } else if (playerChoice === PAPER) {
            if (computerChoice === ROCK) {
                console.log("You win! Paper beats rock!");
                humanScore++;
            } else {
                console.log("You lose! Scissors beats paper!");
                computerScore++;
            }
        } else if (playerChoice === SCISSORS) {
            if (computerChoice === ROCK) {
                console.log("You lose! Rock beats scissors!");
                computerScore++;
            } else {
                console.log("You win! Scissors beats paper!");
                humanScore++;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(); Ò
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("Tie game!")
    }
}