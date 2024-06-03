const input = document.querySelector(".add input")
const button = document.querySelector(".add button")
const boxes = document.querySelector(".boxes");

function addData() {
  const inputValue = input.value;
  let div = document.createElement("div")
  div.classList.add("box");
  div.innerHTML = `
  <h2>${inputValue}</h2>`

  boxes.append(div);

}


button.addEventListener("click", () => {
  addData();
});