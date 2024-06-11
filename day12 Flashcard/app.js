const addCardBtn = document.querySelector(".addbtn");
const allCards = document.querySelector(".cards");
const addCardForm = document.querySelector(".addCard")
const submitBtn = document.querySelector(".submit");
const inputQuestion = document.querySelector("label input");
const inputAnswer = document.querySelector("label textarea");
const crossBtn = document.querySelector(".cross");
const hideBtn = document.querySelectorAll(".card button");



function addAndRemoveClass(e){
  const card = e.target.closest(".card");
  const h3 = card.querySelector("h3");
  h3.classList.toggle("none");
}

addCardBtn.addEventListener("click", () => {
  addCardForm.style.zIndex = "2"
})

crossBtn.addEventListener("click", () => {
  addCardForm.style.zIndex = "-1"
})

function addQuestion() {
  let question = inputQuestion.value;
  let answer = inputAnswer.value;

  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<h4>${question}</h4>
        <button>Show/Hide</button>
        <h3 class="none" >${answer}</h3>`

  allCards.append(div);

  const btn = div.querySelector("button");
  btn.addEventListener("click",addAndRemoveClass);
  inputAnswer.value ='';
  inputQuestion.value= ''


}

submitBtn.addEventListener("click", () => {
  addQuestion();
  addCardForm.style.zIndex = "-1"

})