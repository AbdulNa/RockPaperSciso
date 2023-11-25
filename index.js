    //generates random choice for computer
function getComputerChoice () {
        const computoption = ["rock", "paper", "scissors"];
        const randomOption = Math.floor(Math.random() * computoption.length);
        return computoption[randomOption];
}


//this function shows who wins per their selection
function playRound (playerSelection, computerSelection) {
   let player = playerSelection.toLowerCase();
   let computer = computerSelection;
   
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
    //returns is invalid options are entered
    return "Invalid Selection, Please use Rock, Paper or Scissors"; 
}

    //function to play game five times and tell the winner
function game () { 
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please Enter either Rock, Paper or Scissors");
        const computerSelection = getComputerChoice();
        
        let results = playRound(playerSelection, computerSelection);
        console.log(results);

        if (results.includes("win")) {
            playerCount++;
        }   else if (results.includes("Lose")) {
            computerCount++;
        }

    }    
    console.log(`Your Score: ${playerCount}`);
    console.log(`Computer Score: ${computerCount}`);

    if (playerCount > computerCount) {
        console.log("You Win!!!");
    } else if (playerCount < computerCount) {
        console.log("You Lose");
    } else {
        console.log("its a tie");
    }
    
}

//calls the game to begin
game();