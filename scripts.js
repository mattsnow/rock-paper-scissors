// Top container
const container = document.querySelector('#container');
const table = document.createElement('div');
table.classList.add('table');
table.style.border = ("thick dashed black");
table.style.padding = "10px 10px 300px 10px";
table.style.margin = "50px 300px 50px 300px";
table.style.background = "#8dd6ae";
container.appendChild(table);

// Results paragraph
const results = document.createElement('p');
results.classList.add('results');
results.id = "results";
table.appendChild(results);

// Bottom container
const controls = document.createElement('div');
controls.classList.add('controls');
controls.style.border = ("thick dashed black");
controls.style.padding = "10px";
controls.style.margin = "50px 300px 50px 300px";
container.appendChild(controls);

// Container for Start button
const startDiv = document.createElement('div');
startDiv.classList.add('startDiv');
startDiv.style.padding = "10px 10px 50px 10px";
startDiv.style.margin = "10px 580px";
controls.appendChild(startDiv);

// Container for player choice buttons
const inputDiv = document.createElement('div');
inputDiv.classList.add('inputDiv');
inputDiv.style.padding = "50px";
inputDiv.style.margin = "10px 100px";
controls.appendChild(inputDiv);

// Buttons
// var button = document.createElement("button");
// button.innerHTML = "Start Game";
// button.style.padding = "25px";
// button.style.fontSize = "large"
// button.id = "start";
// startDiv.appendChild(button);

var button = document.createElement("button");
button.innerHTML = "Rock";
button.style.padding = "25px";
button.style.fontSize = "large"
button.style.margin = "0px 25px";
button.id = "rock";
inputDiv.appendChild(button);

var button = document.createElement("button");
button.innerHTML = "Paper";
button.style.padding = "25px";
button.style.fontSize = "large"
button.style.margin = "0px 25px";
button.id = "paper";
inputDiv.appendChild(button);

var button = document.createElement("button");
button.innerHTML = "Scissors";
button.style.padding = "25px";
button.style.fontSize = "large"
button.style.margin = "0px 25px";
button.id = "scissors";
inputDiv.appendChild(button);

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

// Main code

document.getElementById("rock").addEventListener("click", playGame.bind(null, "rock"), false);
document.getElementById("paper").addEventListener("click", playGame.bind(null, "paper"), false);
document.getElementById("scissors").addEventListener("click", playGame.bind(null, "scissors"), false);
// document.getElementById("start").addEventListener("click", playGame);

let computerScore = 0;
let humanScore = 0;
let game_result;
const outputResults = document.getElementById('results');
let computersPlay = generateComputerPlay();
let i = 0;

function playGame(person) {

    if (i < 5) {

        computersPlay = generateComputerPlay()
        playRound(person);
        outputResults.innerHTML = `You play ${person}. Computer plays ${computersPlay}. ${game_result} Computer: ${computerScore} Human: ${humanScore}`;
        i++;
    } else {

        if (computerScore > humanScore) {outputResults.innerHTML = `The game is over. The final score is Computer: ${computerScore} Human: ${humanScore}. The computer wins!`;}
        else if (computerScore < humanScore) {outputResults.innerHTML = `The game is over. The final score is Computer: ${computerScore} Human: ${humanScore}. You win!`;}
        else {outputResults.innerHTML = `The game is over. The final score is Computer: ${computerScore} Human: ${humanScore}. It's a draw!`;}

    }

}