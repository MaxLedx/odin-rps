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