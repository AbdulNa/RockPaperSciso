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

let playerCount = 0;
let computerCount = 0;
//function to play game five times and tell the winner

function game (playerSelection) { 
  if (playerCount === 5 || computerCount === 5) {
    return alert("Game Over, Click RESET to play again")
}
  const computerSelection = getComputerChoice();    
  let results = playRound(playerSelection, computerSelection);
  document.getElementById("gameResults").innerHTML = results + "<br>";
    
  //check for winner after each round 
  if (results.includes("Win")) {
    playerCount++;
  }   else if (results.includes("Lose")) {
    computerCount++;
  }
  document.getElementById("playerScore").innerHTML = playerCount;
  document.getElementById("computerScore").innerHTML = computerCount;  
     
/// Check for overall winner after 5 rounds
if (playerCount === 5 || computerCount === 5) {
    if (playerCount > computerCount) {
      document.getElementById("gameResults").innerHTML += alert("You Lose");
    } else if (playerCount < computerCount) {
      document.getElementById("gameResults").innerHTML += alert("You Lose");
    } else {
      document.getElementById("gameResults").innerHTML += alert("It's a tie");
    }
}
}

// Event listeners for each button
document.getElementById("rock").addEventListener("click", function() {
  game("rock");
});

document.getElementById("paper").addEventListener("click", function() {
  game("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
  game("scissors");
});

// Reset button 
function reset() { 
  playerCount = 0;
  computerCount = 0;
  document.getElementById("playerScore").innerHTML = playerCount;
  document.getElementById("computerScore").innerHTML = computerCount;
  document.getElementById("gameResults").innerHTML = "";
}
