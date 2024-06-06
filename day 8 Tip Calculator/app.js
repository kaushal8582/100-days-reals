const bill = document.querySelector(".bill input");
const tip = document.querySelector(".tip input");
const person = document.querySelector(".person input");
const button = document.querySelector("button")

function calculateTip(){
  let billValue = bill.value;
  let tipValue = tip.value;
  return (billValue * tipValue)/100;
}

function showValue(){
  document.querySelector(".card-abs").classList.remove("none");
  let tipPercentage = calculateTip();
  let totalPrice = Number(bill.value) + Number(tipPercentage);

  document.querySelector(".show-tip").innerText = `$${tipPercentage}`;

  document.querySelector(".show-total-value").innerText =`$${totalPrice}`

  document.querySelector(".show-perperson").innerText = `$${(totalPrice/person.value).toFixed(2)}`
}

button.addEventListener("click",showValue);