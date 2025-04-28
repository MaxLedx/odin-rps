const values = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
};

console.log(getComputerChoice());

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