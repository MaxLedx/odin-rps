const NONE = "none";
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

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
    const input = prompt("rock, paper or scissors ?");
    if (input === null) {
        return NONE;
    }
    const loweredInput = input.toLowerCase();
    if (loweredInput === ROCK || loweredInput === PAPER || loweredInput === SCISSORS) {
        return loweredInput;
    } else {
        return NONE;
    }
}