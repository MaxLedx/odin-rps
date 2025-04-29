const WIN_SCORE = 5;

const values = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
};

const players = {
    none: 'none',
    human: 'human',
    computer: 'computer',
};

const scores = {
    humanScore: 0,
    computerScore: 0,
};

let gameWinner = null;

const score = document.querySelector('#score');
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button')
const scissorsButton = document.querySelector('#scissors-button');

rockButton.addEventListener('click', () => playRound(values.rock, getComputerChoice()));
paperButton.addEventListener('click', () => playRound(values.paper, getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound(values.scissors, getComputerChoice()));

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return values.rock;
    } else if (random === 1) {
        return values.paper;
    } else {
        return values.scissors;
    }
}

function playRound(humanChoice, computerChoice) {
    if (gameWinner === null) {
        const roundWinner = getRoundWinner(humanChoice, computerChoice);
        updateScore(roundWinner);
        gameWinner = tryGetGameWinner();
        updateDisplay(gameWinner);
    }
}

function getRoundWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return players.none;
    } else if (humanChoice === values.rock) {
        return computerChoice === values.paper ? players.computer : players.human;
    } else if (humanChoice === values.paper) {
        return computerChoice === values.rock ? players.human : players.computer;
    } else {
        return computerChoice === values.rock ? players.computer : players.human;
    }
}

function updateScore(roundWinner) {
    if (roundWinner === players.human) {
        scores.humanScore++;
    }
    if (roundWinner === players.computer) {
        scores.computerScore++;
    }
}

function tryGetGameWinner() {
    if (scores.humanScore === WIN_SCORE) {
        return players.human;
    } else if (scores.computerScore === WIN_SCORE) {
        return players.computer;
    } else {
        return null;
    }
}

function updateDisplay(gameWinner = null) {
    if (gameWinner === null) {
        score.innerText = `You: ${scores.humanScore}. Computer: ${scores.computerScore}`;
    } else {
        score.innerText = `Game winner: ${gameWinner === players.human ? 'you' : 'computer'}`;
    }
}