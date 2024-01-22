var inputNumber = document.querySelector("#randomNumber");
var submitButton = document.querySelector("#submit");
var output = document.querySelector(".text");
var remainingGuesses = 5;
var targetNumber = Math.floor(Math.random() * 100);
console.log(targetNumber);
var feedbackFun = function () {
  var userGuess = parseFloat(inputNumber.value);
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
    output.innerHTML += " <br /> You have ".concat(
      remainingGuesses,
      " guesses left."
    );
  } else {
    output.innerHTML += " Game over. The correct number was ".concat(
      targetNumber,
      "."
    );
    disableGame();
  }
  resetInputField();
};
var disableGame = function () {
  submitButton.disabled = true;
  inputNumber.disabled = true;
};
var resetInputField = function () {
  inputNumber.value = "";
};
submitButton.addEventListener("click", feedbackFun);
