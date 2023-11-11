/*
Declare a variable named playerScore with number of 0
Declare a variable named computerScore with number of 0
*/
let playerScore = 0;
let computerScore = 0;

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

document.body.addEventListener("click", (event) => {
  let target = event.target;

  if (target.id === "end-game") {
    if (playerScore > computerScore) {
      let playerWonResult = `Game is over. You've won against Computer with ${playerScore} : ${computerScore} score.`;
      createGameResponse(playerWonResult);
    } else if (playerScore < computerScore) {
      let computerWonResult = `Game is over. You've lost against Computer with ${playerScore} : ${computerScore} score.`;
      createGameResponse(computerWonResult);
    } else {
      let drawResult = `Game is over. You've drawn against Computer with ${playerScore} : ${computerScore} score.`;
      createGameResponse(drawResult);
    }

    playerScore = 0;
    computerScore = 0;
  } else if (target.id === "start-game") {
    let gameResponses = document.querySelectorAll(".game-response");
    if (gameResponses) {
      gameResponses.forEach((response) => {
        response.remove();
      });
    }
  } else {
    let playerSelection = target.id;
    let computerSelection = getComputerChoice();
    let singleRoundResult = playRound(playerSelection, computerSelection);
    let scoreResult = `You: ${playerScore}, Computer: ${computerScore} ...`;

    createGameResponse(singleRoundResult);
    createGameResponse(scoreResult);
  }
});

function createGameResponse(string) {
  let gameResponse = document.createElement("div");
  gameResponse.classList.add("game-response");
  gameResponse.textContent = string;
  document.body.appendChild(gameResponse);
}
