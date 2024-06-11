const quesiton = document.querySelector(".quesiton-box h1");
const option1 = document.querySelector(".first")
const option2 = document.querySelector(".second")
const option3 = document.querySelector(".third")
const option4 = document.querySelector(".four")

const allOption = document.querySelectorAll(".que");


let i = 0;
let score =0;

const data = [
  {
    question: "Which company developed JavaScript?",
    opt1: "Netscape",
    opt2: "Microsoft",
    opt3: "Google",
    opt4: "Apple",
    ans: "Netscape"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    opt1: "//",
    opt2: "/*",
    opt3: "<!--",
    opt4: "#",
    ans: "//"
  },
  {
    question: "Which of the following is a JavaScript data type?",
    opt1: "String",
    opt2: "Number",
    opt3: "Boolean",
    opt4: "All of the above",
    ans: "All of the above"
  },
  {
    question: "Which function is used to parse a string to an integer in JavaScript?",
    opt1: "parseInt()",
    opt2: "parseFloat()",
    opt3: "Number()",
    opt4: "String()",
    ans: "parseInt()"
  },
  {
    question: "Which of the following is used to define a variable in JavaScript?",
    opt1: "var",
    opt2: "let",
    opt3: "const",
    opt4: "All of the above",
    ans: "All of the above"
  },
  {
    question: "What is the correct syntax for referring to an external script called 'app.js'?",
    opt1: "<script href='app.js'>",
    opt2: "<script name='app.js'>",
    opt3: "<script src='app.js'>",
    opt4: "<script file='app.js'>",
    ans: "<script src='app.js'>"
  },
  {
    question: "How do you create a function in JavaScript?",
    opt1: "function:myFunction()",
    opt2: "function = myFunction()",
    opt3: "function myFunction()",
    opt4: "myFunction():function",
    ans: "function myFunction()"
  },
  {
    question: "Which of the following methods is used to access HTML elements using JavaScript?",
    opt1: "getElementById()",
    opt2: "getElementsByClassName()",
    opt3: "getElementsByTagName()",
    opt4: "All of the above",
    ans: "All of the above"
  },
  {
    question: "How can you add a comment in JavaScript?",
    opt1: "<!-- This is a comment -->",
    opt2: "// This is a comment",
    opt3: "/* This is a comment */",
    opt4: "** This is a comment **",
    ans: "// This is a comment"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    opt1: "onmouseover",
    opt2: "onchange",
    opt3: "onclick",
    opt4: "onmouseclick",
    ans: "onclick"
  },
]

function showQuestion() {
  quesiton.innerText = data[i].question;
  option1.innerText = data[i].opt1
  option2.innerText = data[i].opt2
  option3.innerText = data[i].opt3
  option4.innerText = data[i].opt4
}

showQuestion()

allOption.forEach((quest) => {
  quest.addEventListener("click", (e) => {
    console.log("kaushl");
    if (e.target.innerText === data[i].ans) {
      e.target.classList.add("right")
      score++;
      if (i<data.length -1) {
        setTimeout(() => {
          console.log(i);
          i++;
          removeRightandWrongClass();
          showQuestion();
        }, 2000);
      }else{
        document.querySelector("main").classList.add("blurNonActive");
        document.querySelector(".card").classList.remove("none")
        document.querySelector(".score").innerText = `${score}/${data.length}`
      }
    } else {
      e.target.classList.add("wrong")
      addRightClass();
      if (i<data.length -1) {
        setTimeout(() => {
          i++;
          removeRightandWrongClass();
          showQuestion();
        }, 2000);
      }else{
        document.querySelector("main").classList.add("blurNonActive");
        document.querySelector(".card").classList.remove("none")
        document.querySelector(".score").innerText = `${score}/${data.length}`

      }
    }
  })
})

function removeRightandWrongClass() {
  allOption.forEach((q) => {
    q.classList.remove("wrong", "right");
  })
}

function addRightClass() {
  allOption.forEach((q) => {
    if (q.innerText === data[i].ans) {
      q.classList.add("right");
    }
  })
}