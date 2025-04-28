const values = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
};

const scores = {
    humanScore: 0,
    computerScore: 0,
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

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

function playRound(humanChoice, computerChoice) {
    const sanitizedHumanChoice = humanChoice.toLowerCase();
    if (sanitizedHumanChoice === computerChoice) {
        console.log('Tie!');
    } else if (sanitizedHumanChoice === values.rock) {
        if (computerChoice === values.paper) {
            console.log(`You lose! ${values.paper} beats ${values.rock}`);
            scores.computerScore++;
        } else {
            console.log(`You win! ${values.rock} beats ${values.scissors}`);
            scores.humanScore++;
        }
    } else if (sanitizedHumanChoice === values.paper) {
        if (computerChoice === values.rock) {
            console.log(`You win! ${values.paper} beats ${values.rock}`);
            scores.humanScore++;
        } else {
            console.log(`You lose! ${values.scissors} beats ${values.paper}`);
            scores.computerScore++;
        }
    } else {
        if (computerChoice === values.rock) {
            console.log(`You lose! ${values.rock} beats ${values.scissors}`);
            scores.computerScore++;
        } else {
            console.log(`You win! ${values.scissors} beats ${values.paper}`);
            scores.humanScore++;
        }
    }
}