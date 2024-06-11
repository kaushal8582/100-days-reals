const amountInput = document.querySelector(".amount input");
const from = document.querySelector("#from")
const to = document.querySelector("#to");
const resultH3 = document.querySelector("main>h3");
const resultSpan = document.querySelector(".span")

const conversionFactors = {
  meter: 1,
  kilometer: 0.001,
  centimeter: 100,
  micrometer: 1e6,
  nanometer: 1e9,
  mile: 0.000621371,
  yard: 1.09361,
  foot: 3.28084,
  inch: 39.3701,
  lightyear: 1.057e-16
};


function convertUnit(){
  let amount = parseFloat(amountInput.value);
  const fromUnit = from.value;
  const toUnit = to.value;

  if(isNaN(amount)){
    resultSpan.innerText = "Please enter a valid number";
    resultH3.classList.remove("none")
    return;
  }

  let convertInMeater = amount * conversionFactors[toUnit];
  let convertInAmount = convertInMeater/conversionFactors[fromUnit];

  resultSpan.innerText = `${amount} ${fromUnit} = ${convertInAmount} ${toUnit}`;
  resultH3.classList.remove("none");


}

amountInput.addEventListener("input",convertUnit);
to.addEventListener("input",convertUnit)
from.addEventListener("input",convertUnit)