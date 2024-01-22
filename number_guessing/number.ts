const inputNumber = document.querySelector("#randomNumber") as HTMLInputElement;
const submitButton = document.querySelector("#submit") as HTMLButtonElement;
const output = document.querySelector(".text") as HTMLDivElement;

let remainingGuesses = 5;
const targetNumber = Math.floor(Math.random() * 100);

console.log(targetNumber);

const feedbackFun = () => {
  const userGuess = parseFloat(inputNumber.value);

  if (userGuess === targetNumber) {
    output.innerHTML = "Congratulations! You guessed the correct number!";
    disableGame();
  } else if (userGuess > targetNumber) {
    output.innerHTML = "Your guess is too high!";
  } else {
    output.innerHTML = "Your guess is too low!";
  }

  remainingGuesses--;

  if (remainingGuesses > 0) {
    output.innerHTML += ` <br /> You have ${remainingGuesses} guesses left.`;
  } else {
    output.innerHTML += ` Game over. The correct number was ${targetNumber}.`;
    disableGame();
  }

  resetInputField();
};

const disableGame = () => {
  submitButton.disabled = true;
  inputNumber.disabled = true;
};

const resetInputField = () => {
  inputNumber.value = "";
};

submitButton.addEventListener("click", feedbackFun);
