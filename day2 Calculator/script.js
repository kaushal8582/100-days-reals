const resultBox = document.querySelector(".dis-box h2");
const symbol = document.querySelector(".dis-box h3");
const allBtn = document.querySelectorAll(".btn");

let string = '';
let prevValue = '';
let operator = '';

function updateValue() {
  resultBox.innerText = string;
}

function delteOneValue() {
  string = string.slice(0, -1);
  updateValue();
}

function clear() {
  string = '';
  operand = '';
  updateValue();
}

function submit() {
  let stringValue = parseInt(string);
  let preiousValue = parseInt(prevValue);

  let k;

  switch (operator) {
    case "+":
      k = preiousValue + stringValue;
      break;
    case "-":
      k = preiousValue - stringValue;
      break;
    case "*":
      k = preiousValue * stringValue;

      break;
    case "/":
      k = preiousValue / stringValue;

      break;
    case "%":
      k = preiousValue % stringValue;

      break;
    default: return;
  }

  string = k.toString();
  preiousValue='';
  operator=''
  updateValue();
  symbol.innerText =''

}

function calculate(value) {
  string += value;
  updateValue();
}

function setOperator(value) {
  operator = value;
  prevValue = string;
  symbol.innerText = value;
  string = '';
}

allBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = e.target.innerText;
    if (value >= 0 && value <= 9) {
      calculate(value);
    } else if (value == "DEL") {
      delteOneValue();
    } else if (value == "cir") {
      clear();
    } else if (value == "=") {
      submit();
    } else {
      setOperator(value);
    }
  })
})