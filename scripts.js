let computerScore = 0
let humanScore = 0

function computerPlay() {
    let result
    let number = Math.random()

    if (number <= 0.33) {
        result = "rock";
    } else if (number <= 0.66) {
        result = "paper";
    } else {
        result = "scissors";
    }

    console.log("Computer plays " + result)

    return (result)
}

function userInput() {
    let person = prompt("Please enter your play", "Rock");

    person = person.toLowerCase();

    if ((person == "rock") || (person == "paper") || (person == "scissors")) {
        console.log("You play " + person)
        return (person)
    } else {
        return (null)
    }

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return ("It's a draw!")
        } else if (computerSelection == "paper") {
            return ("You lose! Paper beats rock")
        } else {
            return ("You win! Rock beats scissors")
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return ("You win! Paper beats rock")
        } else if (computerSelection == "paper") {
            return ("It's a draw!")
        } else {
            return ("You lose! Scissors beats paper")
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return ("You lose! Rock beats scissors")
        } else if (computerSelection == "paper") {
            return ("You win! Scissors beats paper")
        } else {
            return ("It's a draw!")
        }
    }





    
}

function tallyScore(game_result_str) {

    switch(game_result_str) {
        case "You l":
            computerScore++
            break;
        case "You w":
            humanScore++
            break;
    }

}

function playGame() {
    let game_result

    console.log("Round 1: ")
    game_result = playRound(userInput(), computerPlay());
    tallyScore(game_result.slice(0, 5))
    console.log(game_result)
    console.log("Computer: " + computerScore + " Human: " + humanScore)
    console.log("\n")

    console.log("Round 2: ")
    game_result = playRound(userInput(), computerPlay());
    tallyScore(game_result.slice(0, 5))
    console.log(game_result)
    console.log("Computer: " + computerScore + " Human: " + humanScore)
    console.log("\n")

    console.log("Round 3: ")
    game_result = playRound(userInput(), computerPlay());
    tallyScore(game_result.slice(0, 5))
    console.log(game_result)
    console.log("Computer: " + computerScore + " Human: " + humanScore)
    console.log("\n")

    console.log("Round 4: ")
    game_result = playRound(userInput(), computerPlay());
    tallyScore(game_result.slice(0, 5))
    console.log(game_result)
    console.log("Computer: " + computerScore + " Human: " + humanScore)
    console.log("\n")

    console.log("Round 5: ")
    game_result = playRound(userInput(), computerPlay());
    tallyScore(game_result.slice(0, 5))
    console.log(game_result)
    console.log("Computer: " + computerScore + " Human: " + humanScore)
    console.log("\n")

    

    
}