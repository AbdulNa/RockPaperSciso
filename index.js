//generates random choice for computer
function getComputerChoice() {
    const computoption = ["rock", "paper", "scissors"];
    const randomOption = Math.floor(Math.random() * computoption.length);
    return computoption[randomOption];
}

//this function shows who wins per their selection
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection;



    if (player === computer) {
        return "It's a Tie";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return `You Win!! ${player} beats ${computer}`;
    } else {
        return `You Lose!! ${computer} beats ${player}`;
    }
}
/*
if (player === computer) {
 return "Its a Tie";
}
 
if (player === "rock" && computer === "scissors") {
 return "You win!! Rock beats Scissors";

} else if (player === "scissors" && computer === "paper") {
 return "Your win!! Scissors beats Paper";

} else if (player === "paper" && computer === "rock") {
 return "You win!! Paper beats Rock";

} else if (computer === "rock" && player === "scissors") {
 return "You Lose Rock beats Scissors";

} else if (computer === "scissors" && player === "paper") {
 return "Your Lose!! Scissors beats Paper";

} else if (computer === "paper" && player === "rock") {
 return "You Lose!! Paper beats Rock";
}
 //returns if invalid options are entered
 return "Invalid Selection, Please use Rock, Paper or Scissors"; 
}
*/




//function to play game five times and tell the winner
function game(playerSelection) {
    let playerCount = 0;
    let computerCount = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection);
        document.getElementById("gameResults").innerHTML += results + "<br>";

        //check for winner after each round 
        if (results.includes("win")) {
            playerCount++;
        } else if (results.includes("Lose")) {
            computerCount++;
        }

    }

    /// Check for overall winner after 5 rounds
    if (playerCount + computerCount === 5) {
        if (playerCount > computerCount) {
            document.getElementById("gameResults").innerHTML += "You Win!!!";
        } else if (playerCount < computerCount) {
            document.getElementById("gameResults").innerHTML += "You Lose";
        } else {
            document.getElementById("gameResults").innerHTML += "It's a tie";
        }
    }

}
// Event listeners for each button
document.getElementById("rock").addEventListener("click", function () {
    game("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    game("paper");
});

document.getElementById("scissor").addEventListener("click", function () {
    game("scissors");
});
