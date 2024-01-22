var weightInput = document.querySelector("#weight");
var heightInput = document.querySelector("#height");
var bmiCalc = function (e) {
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
    var resultElement = document.querySelector("#output");
    e.preventDefault();
    // Check if the entered values are valid numbers
    if (weight === 0 || height === 0) {
        console.log("Please enter valid numeric values for weight and height");
        return;
    }
    var dinominator = height * height;
    var result = weight / dinominator;
    if (result < 18.5) {
        console.log("Underweight");
        resultElement.innerHTML = "Underweight";
    }
    else if (result >= 18.5 && result < 25) {
        console.log("Normal");
        resultElement.innerHTML = "Normal";
    }
    else if (result >= 25 && result < 30) {
        console.log("Overweight");
        resultElement.innerHTML = "OverWeight";
    }
    else {
        console.log("Obesity");
        resultElement.innerHTML = "Obesity";
    }
};
var calculateButton = document.querySelector("button");
calculateButton.addEventListener("click", bmiCalc);
