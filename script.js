const scoresDiv = document.getElementById('scores');
const buttons = ['rock', 'paper', 'scissors'];
const scores = { humanScore: 0, computerScore: 0 };

const outcomes = {
    rock: { paper: 'lose', scissors: 'win' },
    paper: { scissors: 'lose', rock: 'win' },
    scissors: { rock: 'lose', paper: 'win' },
};

buttons.forEach(choice => {
    document.getElementById(choice).addEventListener('click', () => playRound(choice, getComputerChoice()));
});

function getComputerChoice() {
    return buttons[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    if (scores.humanScore === 5 || scores.computerScore === 5) return;

    let result;
    if (humanChoice === computerChoice) {
        result = 'tie';
    } else {
        result = outcomes[humanChoice][computerChoice];
        if (result === 'lose') {
            scores.computerScore++;
        } else {
            scores.humanScore++;
        }
    }

    updateScoresDisplay(result);
}

function updateScoresDisplay(roundResult) {
    if (scores.humanScore === 5 && scores.computerScore === 5) {
        scoresDiv.innerText = 'Tie';
    } else if (scores.humanScore === 5) {
        scoresDiv.innerText = 'You win!';
    } else if (scores.computerScore === 5) {
        scoresDiv.innerText = 'You lose!';
    } else {
        scoresDiv.innerText = `Your score: ${scores.humanScore} VS Computer score: ${scores.computerScore}. Round result: ${roundResult}`;
    }
}
