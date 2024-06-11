const plusBtn = document.querySelector(".addIcon")
const high = document.querySelector(".high");
const closeBtn = document.querySelector(".close-btn h2");

const allTrans = document.querySelector(".alltrans");

const amountInput = document.querySelector(".amount-input input");
const options = document.querySelector("#option");
const addTransBtn = document.querySelector("button");
const totalBalnce = document.querySelector(".balance-show h1");



let totalAmount = 70000;

plusBtn.addEventListener("click", () => {
  high.style.zIndex = "9999"
})

closeBtn.addEventListener("click", () => {
  high.style.zIndex = "-9999"
})

addTransBtn.addEventListener("click", () => {
  let amountInputValue = Number(amountInput.value);
  let optionsValue = options.value;

  let div = document.createElement("div");
  div.classList.add("trans");

  totalAmount = totalAmount - amountInputValue;

  let value = `$ ${totalAmount}`


  div.innerHTML = `          <div class="tDetail">
            <div class="img">
              <img src="electricity.jpg" alt="">
            </div>
            <h2>${optionsValue}</h2>
          </div>
          <h2>${amountInputValue}</h2>`

  allTrans.append(div);
  totalBalnce.innerHTML = value;
  high.style.zIndex = "-9999"

})