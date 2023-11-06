/*
Declare a variable named playerScore with number of 0
Declare a variable named computerScore with number of 0
*/
let playerScore = 0;
let computerScore = 0;

// Print "Welcome to Rock Paper Scissors game! Type "game()" to console to start playing."
console.log(`Welcome to Rock Paper Scissors game! Type "game()" to console to start playing.`)

/*
Declare a function named getComputerChoice
Declare a variable named choices with array, holding "rock", "paper" and "scissors" text values
Calculate a random array index based on array length and store the result in a variable named random
Return a random text value from choices array using variable named random
*/
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

/*
Declare a function named playRound with two parameters: playerSelection and computerSelection
If playerSelection is "rock" and computerSelection is "paper" increment the computerScore by 1 and return the following text: "You Lose! Paper beats Rock."
If playerSelection is "rock" and computerSelection is "scissors" increment the playerScore by 1 and return the following text: "You Win! Rock beats Scissors."
If playerSelection is "rock" and computerSelection is "rock" increment the playerScore and computerScore by 0.5 and return the following text: "Draw! Both chose Rock."
If playerSelection is "paper" and computerSelection is "rock" increment the playerScore by 1 and return the following text: "You Win! Paper beats Rock."
If playerSelection is "paper" and computerSelection is "scissors" increment the computerScore by 1 and return the following text: "You Lose! Scissors beats Paper."
If playerSelection is "paper" and computerSelection is "paper" increment the playerScore and computerScore by 0.5 and return the following text: "Draw! Both chose Paper."
If playerSelection is "scissors" and computerSelection is "rock" increment the computerScore by 1 and return the following text: "You Lose! Rock beats Scissors."
If playerSelection is "scissors" and computerSelection is "paper" increment the playerScore by 1 and return the following text: "You Win! Scissors beats Paper."
If playerSelection is "scissors" and computerSelection is "scissors" increment the playerScore and computerScore by 0.5 and return the following text: "Draw! Both chose Scissors."
*/
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors.";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    playerScore += 0.5;
    computerScore += 0.5;
    return "Draw! Both chose Rock.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You Win! Paper beats Rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper.";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    playerScore += 0.5;
    computerScore += 0.5;
    return "Draw! Both chose Paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper.";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    playerScore += 0.5;
    computerScore += 0.5;
    return "Draw! Both chose Scissors.";
  }
}

/*
Declare a function named game
Print "Starting a 5 round game..."
Loop 5 times
Capture user input and store the result in a variable named playerSelection
Make playerSelection case-insensitive
Declare a varible named computerSelection with the result of the getComputerChoice function
If playerSelection doesn't match "rock", "paper" or "scissors" text values print "Error! Please, type the valid element in prompt window."
If playerSelection matches one of the "rock", "paper" or "scissors" text values:
print the result of the playRound function with first parameter set to playerSelection variable and second parameter set to computerSelection variable
print the following text: "You: playerScore, Computer: computerScore ..." where playerScore and computerScore are substituted with appropriate variables
End loop
If playerScore is larger than computerScore print "Game is over. You've won against Computer with playerScore : computerScore score." where playerScore and computerScore are substituted with appropriate variables
If computerScore is larger than playerScore print "Game is over. You've lost against Computer with playerScore : computerScore score." where playerScore and computerScore are substituted with appropriate variables
If playerScore equals computerScore print "Game is over. You've drawn against Computer with playerScore : computerScore score." where playerScore and computerScore are substituted with appropriate variables
Set playerScore and computerScore variables to number of 0
Print "Type "game()" to console to start a new game."
*/
function game() {
  console.log("Starting a 5 round game...");
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Please, type the element.").toLowerCase();
    const computerSelection = getComputerChoice();
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
      console.log("Error! Please, type the valid element in prompt window.");
    } else {
      console.log(playRound(playerSelection, computerSelection));
      console.log(`You: ${playerScore}, Computer: ${computerScore} ...`);
    }
  }
  if (playerScore > computerScore) {
    console.log(`Game is over. You've won against Computer with ${playerScore} : ${computerScore} score.`);
  } else if (playerScore < computerScore) {
    console.log(`Game is over. You've lost against Computer with ${playerScore} : ${computerScore} score.`);
  } else {
    console.log(`Game is over. You've drawn against Computer with ${playerScore} : ${computerScore} score.`);
  }
  playerScore = 0;
  computerScore = 0;
  console.log(`Type "game()" to console to start a new game.`)
}