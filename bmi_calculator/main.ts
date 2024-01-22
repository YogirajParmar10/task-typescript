const weightInput = document.querySelector("#weight") as HTMLInputElement;
const heightInput = document.querySelector("#height") as HTMLInputElement;

const bmiCalc = (e: Event) => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const resultElement = document.querySelector("#output");
  e.preventDefault();
  // Check if the entered values are valid numbers
  if (weight === 0 || height === 0) {
    console.log("Please enter valid numeric values for weight and height");
    return;
  }
  let dinominator = height * height;
  let result = weight / dinominator;

  if (result < 18.5) {
    console.log("Underweight");
    resultElement.innerHTML = "Underweight";
  } else if (result >= 18.5 && result < 25) {
    console.log("Normal");
    resultElement.innerHTML = "Normal";
  } else if (result >= 25 && result < 30) {
    console.log("Overweight");
    resultElement.innerHTML = "OverWeight";
  } else {
    console.log("Obesity");
    resultElement.innerHTML = "Obesity";
  }
};

const calculateButton = document.querySelector("button") as HTMLButtonElement;
calculateButton.addEventListener("click", bmiCalc);
