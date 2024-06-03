// // Select necessary DOM elements
// const display = document.querySelector('.dis-box h2');
// const buttons = document.querySelectorAll('.btn');

// let currentOperand = '';
// let previousOperand = '';
// let operation = undefined;

// // Update the display
// function updateDisplay() {
//   display.innerText = currentOperand;
// }

// // Clear the calculator
// function clear() {
//   currentOperand = '';
//   previousOperand = '';
//   operation = undefined;
//   updateDisplay();
// }

// // Delete the last entered character
// function deleteLast() {
//   currentOperand = currentOperand.toString().slice(0, -1);
//   updateDisplay();
// }

// // Append a number or dot to the current operand
// function appendNumber(number) {
//   if (number === '.' && currentOperand.includes('.')) return;
//   currentOperand = currentOperand.toString() + number.toString();
//   updateDisplay();
// }

// // Choose an operation
// function chooseOperation(op) {
//   if (currentOperand === '') return;
//   if (previousOperand !== '') {
//     compute();
//   }
//   operation = op;
//   previousOperand = currentOperand;
//   currentOperand = '';
// }

// // Compute the result based on the chosen operation
// function compute() {
//   let computation;
//   const prev = parseFloat(previousOperand);
//   const current = parseFloat(currentOperand);
//   if (isNaN(prev) || isNaN(current)) return;
//   switch (operation) {
//     case '+':
//       computation = prev + current;
//       break;
//     case '-':
//       computation = prev - current;
//       break;
//     case '*':
//       computation = prev * current;
//       break;
//     case '/':
//       computation = prev / current;
//       break;
//     default:
//       return;
//   }
//   currentOperand = computation;
//   operation = undefined;
//   previousOperand = '';
//   updateDisplay();
// }

// // Add event listeners to all buttons
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const value = button.innerText;

//     if (value >= '0' && value <= '9' || value === '.') {
//       appendNumber(value);
//     } else if (value === 'CIR') {
//       clear();
//     } else if (value === 'DEL') {
//       deleteLast();
//     } else if (value === '=') {
//       compute();
//     } else {
//       chooseOperation(value);
//     }
//   });
// });


const display = document.querySelector('.dis-box h2');
const displayOperand = document.querySelector('.dis-box h3');
const buttons = document.querySelectorAll('.btn');

let string = ''
let operend = ''
let prevValue = ''

function updateDisplay() {
  // if(string==''){
  //   string='0';
  // }
  display.innerText = string;
}

function deleteLastValue() {
  string = string.slice(0, -1);
  updateDisplay();
}

function clear() {
  string = '';
  operend = '';
  updateDisplay();
}

function operand(value) {

  console.log(value);
  operend = value;
  displayOperand.innerText = value;
  prevValue = string;
  string = '';

}

function calculate() {
  let a = parseInt(prevValue);
  let b = parseInt(string);
  let k;


  switch (operend) {
    case "+":
      k = a + b;
      string = k;
      prevValue = ''
      operend = ''
      updateDisplay();
      break;
    case "-":
      k = a - b;
      string = k;
      prevValue = ''
      operend = ''
      updateDisplay();
      break;
    case "*":
      k = a * b;
      string = k;
      prevValue = ''
      operend = ''
      updateDisplay();
      break;
    case "/":
      k = a / b;
      string = k;
      prevValue = ''
      operend = ''
      updateDisplay();
      break;
  }


}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = e.target.innerText;
    if (value >= 0 && value <= 9) {
      string += value;
      updateDisplay()
    } else if (value == "DEL") {
      deleteLastValue();
    } else if (value == "cir") {
      clear();
    } else if (value == "=") {
      calculate();
    }
    else {
      console.log("operand click");
      operand(value);
    }


  })
})



