const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function getComputerChoice() {
    const random = Math.random();
    if (random <= 1.0 / 3.0) {
        return ROCK;
    } else if (random <= 2.0 / 3.0) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function getHumanChoice() {
    return prompt('ROCK, PAPER or SCISSORS ?');
}

function playRound(humanChoice, computerChoice) {
    const upperCaseHumanChoice = humanChoice.toUpperCase();

    if (upperCaseHumanChoice == computerChoice) {
        console.log('Tie');
    } else if (upperCaseHumanChoice == ROCK) {
        if (computerChoice == PAPER) {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${upperCaseHumanChoice}`);
        } else {
            humanScore++;
            console.log(`You win! ${upperCaseHumanChoice} beats ${computerChoice}`);
        }
    } else if (upperCaseHumanChoice == PAPER) {
        if (computerChoice == ROCK) {
            humanScore++;
            console.log(`You win! ${upperCaseHumanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${upperCaseHumanChoice}`);
        }
    } else if (upperCaseHumanChoice == SCISSORS) {
        if (computerChoice == ROCK) {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${upperCaseHumanChoice}`);
        } else {
            humanScore++;
            console.log(`You win! ${upperCaseHumanChoice} beats ${computerChoice}`);
        }
    }
}