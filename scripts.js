function computerPlay() {
    let result
    let number = Math.floor(Math.random() * 10) 

    if (number <= 2) {
        result = "Rock";
    }
    else if (number <= 5) {
    result = "Paper";
    }
    else {
    result = "Scissors";
    }

    return(result)
}

console.log(computerPlay())