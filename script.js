const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

console.log(getComputerChoice());

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