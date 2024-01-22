var userInput = document.querySelector("#userInput");
var buttonEvent = document.querySelector("button");
var result = document.querySelector(".result");
var targetArray = ["ROCK", "PAPER", "SCISSOR"];
var randomIndex = Math.floor(Math.random() * targetArray.length);
var randomValue = targetArray[randomIndex];
console.log(randomValue);
var output = function () {
    console.log(userInput.value);
    console.log(randomValue);
    if (userInput.value.toUpperCase() == randomValue) {
        result.innerHTML =
            "Opposition choice was ".concat(randomValue, "<br>") +
                "Your choice was ".concat(userInput.value.toUpperCase(), "<br>") +
                "This round is draw!!";
        result.style.background = "yellow";
    }
    else if (userInput.value.toUpperCase() == "ROCK" &&
        randomValue == "PAPER") {
        loose();
    }
    else if (userInput.value.toUpperCase() == "ROCK" &&
        randomValue == "SCISSOR") {
        won();
    }
    else if (userInput.value.toUpperCase() == "PAPER" &&
        randomValue == "ROCK") {
        won();
    }
    else if (userInput.value.toUpperCase() == "PAPER" &&
        randomValue == "SCISSOR") {
        loose();
    }
    else if (userInput.value.toUpperCase() == "SCISSOR" &&
        randomValue == "ROCK") {
        loose();
    }
    else if (userInput.value.toUpperCase() == "SCISSOR" &&
        randomValue == "PAPER") {
        won();
    }
    else {
        alert("Please enter a valid choice");
    }
};
var won = function () {
    result.innerHTML =
        "Opposition choice was".concat(randomValue, "<br>") +
            "Your choice was ".concat(userInput.value.toUpperCase(), "<br>") +
            "You won this round!";
    result.style.border = "1px solid #39e75f";
    result.style.backgroundColor = "#39e75f";
};
var loose = function () {
    result.innerHTML =
        "Opposition choice was ".concat(randomValue, " <br>") +
            "Your choice was ".concat(userInput.value.toUpperCase(), "<br>") +
            "You Loose this round!";
    result.style.border = "1px solid #D0342c";
    result.style.backgroundColor = "#D0342c";
};
buttonEvent.addEventListener("click", output);
