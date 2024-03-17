// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const height = document.querySelector(".height");
//   const weight = document.querySelector(".weight");
//   const result = document.querySelector(".result");
//   result.textContent = "";

//   let calculate = (weight.value * 10000) / (height.value * height.value);

//   if (
//     height < 0 ||
//     weight < 0 ||
//     calculate < 0 ||
//     height == NaN ||
//     weight == NaN
//   ) {
//     height.textContent = "";
//     weight.textContent = "";
//     alert("Invalid Input");
//   } else {
//     result.textContent = calculate.toFixed(1);
//   }
// });

const button = document.querySelector("button");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
  const height = document.querySelector(".height");
  const weight = document.querySelector(".weight");
  const result = document.querySelector(".result");
  result.textContent = "";

  let calculate = (weight.value * 10000) / (height.value * height.value);

  if (height <= 0 || weight <= 0 || isNaN(calculate)) {
    alert("Invalid Input");
  } else {
    height.style.height = "10%";
    weight.style.height = "10%";
    container.style.height = "30rem";

    if (calculate >= 18 && calculate < 25) {
      result.textContent = `Your BMI - ${calculate.toFixed(1)}\t [NORMAL]`;
      container.style.backgroundColor = "#90ee90";
    } else if (calculate < 18) {
      result.textContent = `Your BMI - ${calculate.toFixed(1)}\t [UNDERWEIGHT]`;
      container.style.backgroundColor = "#87b1d9";
      height.style.height = "10%";
      weight.style.height = "10%";
    } else if (calculate >= 25 && calculate <= 30) {
      result.textContent = `Your BMI - ${calculate.toFixed(1)}\t [OVERWEIGHT]`;
      container.style.backgroundColor = "#efe136";
      height.style.height = "10%";
      weight.style.height = "10%";
    } else if (calculate >= 30 && calculate <= 35) {
      result.textContent = `Your BMI - ${calculate.toFixed(1)}\t [OBESE]`;
      container.style.backgroundColor = "red";
      height.style.height = "10%";
      weight.style.height = "10%";
    } else {
      result.textContent = `Your BMI - ${calculate.toFixed(
        1
      )}\t [EXTREMELY OBESE]`;
      container.style.backgroundColor = "#8b0000";
      height.style.height = "10%";
      weight.style.height = "10%";
    }
  }
});
