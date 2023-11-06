function getComputerChoice() {
  const array = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * array.length);
  const chosenText = array[index];
  return chosenText;
}
