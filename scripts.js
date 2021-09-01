// Functions

function generateComputerPlay() {
    let result
    let number = Math.random()

    if (number <= 0.33) {
        result = "rock";
    } else if (number <= 0.66) {
        result = "paper";
    } else {
        result = "scissors";
    }

    return (result)
}

function calculateRound(playerSelection, computerSelection) {

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return ("It's a draw!")
        } else if (computerSelection == "paper") {
            return ("You lose! Paper beats rock.")
        } else {
            return ("You win! Rock beats scissors.")
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return ("You win! Paper beats rock.")
        } else if (computerSelection == "paper") {
            return ("It's a draw!")
        } else {
            return ("You lose! Scissors beats paper.")
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return ("You lose! Rock beats scissors.")
        } else if (computerSelection == "paper") {
            return ("You win! Scissors beats paper.")
        } else {
            return ("It's a draw!")
        }
    }
}

function tallyScore(game_result_str) {

    switch (game_result_str) {
        case "You l":
            computerScore++
            break;
        case "You w":
            humanScore++
            break;
    }
}

function playRound(person) {

    game_result = calculateRound(person, computersPlay);
    tallyScore(game_result.slice(0, 5))
}

function resetGame() {

    i = 0;
    computerScore = 0;
    humanScore = 0;
    outputResults.innerHTML = "Choose your selection to begin";
    outputScore.innerHTML = "There are 5 rounds";
}

// Main code

document.getElementById("rock").addEventListener("click", playGame.bind(null, "rock"), false);
document.getElementById("paper").addEventListener("click", playGame.bind(null, "paper"), false);
document.getElementById("scissors").addEventListener("click", playGame.bind(null, "scissors"), false);
document.getElementById("reset").addEventListener("click", resetGame);

let computerScore = 0;
let humanScore = 0;
let game_result;
const outputResults = document.getElementById('text1');
const outputScore = document.getElementById('text2');
let computersPlay = generateComputerPlay();
let i = 0;

function playGame(person) {

    if (i < 5) {

        computersPlay = generateComputerPlay()
        playRound(person);
        outputResults.innerHTML = `You play ${person}. Computer plays ${computersPlay}. ${game_result}`;
        outputScore.innerHTML = `Computer: ${computerScore} Human: ${humanScore}`;
        i++;

    } else {

        if (computerScore > humanScore) {
            outputResults.innerHTML = `The game is over. The final score is:`;
            outputScore.innerHTML = `Computer: ${computerScore} Human: ${humanScore}. The computer wins!`
        } else if (computerScore < humanScore) {
            outputResults.innerHTML = `The game is over. The final score is:`;
            outputScore.innerHTML = ` Computer: ${computerScore} Human: ${humanScore}. You win!`
        } else {
            outputResults.innerHTML = `The game is over. The final score is:`;
            outputScore.innerHTML = ` Computer: ${computerScore} Human: ${humanScore}. It's a draw!`
        }
    }
}