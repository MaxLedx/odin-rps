const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const HUMAN = 'human';
const COMPUTER = 'computer';
const TIE = 'tie';

playGame();

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
    return prompt(`${ROCK}, ${PAPER} or ${SCISSORS} ?`);
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const lowerCaseHumanChoice = humanChoice.toLowerCase();

        if (lowerCaseHumanChoice === computerChoice) {
            return TIE;
        } else if (lowerCaseHumanChoice === ROCK) {
            return computerChoice === PAPER ? COMPUTER : HUMAN;
        } else if (lowerCaseHumanChoice === PAPER) {
            return computerChoice === ROCK ? HUMAN : COMPUTER;
        } else if (lowerCaseHumanChoice === SCISSORS) {
            return computerChoice === ROCK ? COMPUTER : HUMAN;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice();

        const roundWinner = playRound(humanChoice, computerChoice);

        if (roundWinner === TIE) {
            console.log('Tie!')
        } else if (roundWinner === HUMAN) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    if (humanScore === computerScore) {
        console.log('Game tie!')
    } else if (humanScore > computerScore) {
        console.log('You win the game!');
    } else {
        console.log('You lose the game!');
    }
}