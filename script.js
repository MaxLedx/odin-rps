const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice() {
    const choices = [ROCK, PAPER, SCISSORS];
    return choices[Math.floor(Math.random() * 3)];
}


function getHumanChoice() {
    const input = prompt('Enter one of the following: rock, paper or scissors');
    const loweredInput = input?.toLowerCase();
    return loweredInput === ROCK || loweredInput === PAPER || loweredInput === SCISSORS ? loweredInput : null;
}

function playRound(humanChoice, computerChoice) {
    const outcomes = {
        rock: { paper: 'lose', scissors: 'win' },
        paper: { scissors: 'lose', rock: 'win' },
        scissors: { rock: 'lose', paper: 'win' },
    };

    if (humanChoice === computerChoice) {
        console.log('Tie');
    } else {
        const result = outcomes[humanChoice][computerChoice];
        if (result === 'lose') {
            computerScore++;
            console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
        } else {
            humanScore++;
            console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`);
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection;
        while (!humanSelection) humanSelection = getHumanChoice();
        playRound(humanSelection, getComputerChoice());
    }

    console.log(
        humanScore === computerScore ? 'Game tie!' :
            humanScore < computerScore ? 'You lose the game' : 'You win the game!'
    );
}

