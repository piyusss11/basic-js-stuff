let form = document.querySelector("form");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let btn = document.querySelector("#btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Write a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Write a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.5) {
      result.innerHTML = `Your BMI is ${bmi} and you are underweight`;
    } else if (bmi < 24.9 && bmi > 18.5) {
      result.innerHTML = `Your BMI is ${bmi} and you have normal weight`;
    } else if (bmi < 29.9 && bmi > 25) {
      result.innerHTML = `Your BMI is ${bmi} and you are overweight`;
    } else if (bmi > 30) {
      result.innerHTML = `Your BMI is ${bmi} and you are obese`;
    }
  }
});
