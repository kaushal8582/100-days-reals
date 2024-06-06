const male = document.querySelector(".m");
const female = document.querySelector(".f");
const moveCard = document.querySelector(".card-abs");

const ageInput = document.querySelector(".age input");
const heightInput = document.querySelector(".height input");
const weightInput = document.querySelector(".weight input");

const submitBtn = document.querySelector("button");

const span = document.querySelector(".result h2 span");
const result = document.querySelector(".result");

const kg = document.querySelector(".kg")
const pound =document.querySelector(".pound");

const feet = document.querySelector(".feet")
const meater = document.querySelector(".meater");


let string = 'Normal';


kg.addEventListener("click",()=>{
  kg.classList.add("active")
  pound.classList.remove("active")
})
pound.addEventListener("click",()=>{
  pound.classList.add("active")
  kg.classList.remove("active")
})


feet.addEventListener("click",()=>{
  feet.classList.add("active")
  meater.classList.remove("active")
})
meater.addEventListener("click",()=>{
  meater.classList.add("active")
  feet.classList.remove("active")
})



male.addEventListener("click", () => {
  moveCard.style.left = "0";
});

female.addEventListener("click", () => {
  moveCard.style.left = "50%";
});

function calculateBMI() {
  result.classList.remove("none")
  let heightInM = heightInput.value;
  let weightInKg = weightInput.value;

  // Convert height from centimeters to meters
  // let heightInM = heightInCm / 100;
  let heightSquared = Math.pow(heightInM, 2);
  let BMI = Math.floor(weightInKg / heightSquared);

  if (BMI < 18.5) {
    string = "Underweight";
    span.classList.remove("normal", "overweight", "obese");
    span.classList.add("underweight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    string = "Normal";
    span.classList.remove("underweight", "overweight", "obese");
    span.classList.add("normal");
  } else if (BMI >= 25 && BMI <= 29.9) {
    string = "Overweight";
    span.classList.remove("normal", "underweight", "obese");
    span.classList.add("overweight");
  } else {
    string = "Obese";
    span.classList.remove("normal", "underweight", "overweight");
    span.classList.add("obese");
  }

  document.querySelector(".result h2").innerHTML = `BMI = ${BMI} kg/m<sup>2</sup> <span class="${span.className}">(${string})</span>`;
}

submitBtn.addEventListener("click", calculateBMI);
