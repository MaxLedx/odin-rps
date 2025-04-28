const values = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
};

console.log(getHumanChoice());

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return values.rock;
    } else if (random == 1) {
        return values.paper;
    } else {
        return values.scissors;
    }
}

function getHumanChoice() {
    return prompt('rock, paper or scissors ?');
}