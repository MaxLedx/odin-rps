
console.log(getHumanChoice());

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= 1 / 3) {
        return "rock";
    } else if (randomNumber <= 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    while (true) {
        const input = prompt('rock, paper, scissors ?');
        if (input === 'rock' || input === 'paper' || input === 'scissors') {
            return input;
        }
    }
}