/*
Declare a function named getComputerChoice
Declare a variable named choices with array, holding "Rock", "Paper" and "Scissors" text values
Calculate a random array index based on array length and declare variable named random with calculation result
Return a random text value from choices array using variable named random
*/
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

/*
Declare a function named playRound with two parameters: playerSelection and computerSelection
Make playerSelection parameter case-insensitive
If playerSelection is "rock" and computerSelection is "paper" return the following text: "You Lose! Paper beats Rock"
If playerSelection is "rock" and computerSelection is "scissors" return the following text: "You Win! Rock beats Scissors"
If playerSelection is "rock" and computerSelection is "rock" return the following text: "Draw! Both chose Rock"
If playerSelection is "paper" and computerSelection is "rock" return the following text: "You Win! Paper beats Rock"
If playerSelection is "paper" and computerSelection is "scissors" return the following text: "You Lose! Scissors beats Paper"
If playerSelection is "paper" and computerSelection is "paper" return the following text: "Draw! Both chose Paper"
If playerSelection is "scissors" and computerSelection is "rock" return the following text: "You Lose! Rock beats Scissors"
If playerSelection is "scissors" and computerSelection is "paper" return the following text: "You Win! Scissors beats Paper"
If playerSelection is "scissors" and computerSelection is "scissors" return the following text: "Draw! Both chose Scissors"
If playerSelection don't match "rock", "paper" or "scissors" lowercase or uppercase text values return the following text: "Error! Please, type the correct element"
*/
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "Draw! Both chose Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Draw! Both chose Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "Draw! Both chose Scissors";
  } else {
    return "Error! Please, type the correct element";
  }
}
